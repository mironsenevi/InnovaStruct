package com.innovastruct.InnovaStruct.services;

import com.innovastruct.InnovaStruct.models.Company;
import com.innovastruct.InnovaStruct.models.Project;
import com.innovastruct.InnovaStruct.models.Certification;
import com.innovastruct.InnovaStruct.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    private final String UPLOAD_DIRECTORY = "uploads"; // Directory to store uploaded files
    private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public Company createCompany(Company company,
                                 MultipartFile[] projectImageFiles,
                                 MultipartFile[] certificateImageFiles) throws ParseException, IOException {

        // Create main upload directory if it doesn't exist
        Path uploadPath = Paths.get(UPLOAD_DIRECTORY);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // 1. Handle Project Images Upload
        if (projectImageFiles != null && projectImageFiles.length > 0) {
            int imageIndex = 0;
            List<Project> projects = company.getPastProjects();

            if (projects != null) {
                for (Project project : projects) {
                    List<String> imageUrls = new ArrayList<>();

                    // Each project can have multiple images, process them in order
                    int projectImageCount = project.getImages() != null ? project.getImages().size() : 0;

                    for (int i = 0; i < projectImageCount && imageIndex < projectImageFiles.length; i++, imageIndex++) {
                        MultipartFile file = projectImageFiles[imageIndex];
                        if (file != null && !file.isEmpty()) {
                            String imageUrl = storeFileAndGetUrl(file, "project-images");
                            imageUrls.add(imageUrl);
                        }
                    }

                    project.setImages(imageUrls);
                }
            }
        }

        // 2. Handle Certificate Images Upload
        if (certificateImageFiles != null && certificateImageFiles.length > 0) {
            List<Certification> certifications = company.getCertifications();
            if (certifications != null) {
                for (int i = 0; i < certifications.size() && i < certificateImageFiles.length; i++) {
                    MultipartFile file = certificateImageFiles[i];
                    if (file != null && !file.isEmpty()) {
                        String imageUrl = storeFileAndGetUrl(file, "certificate-images");
                        certifications.get(i).setImageUrl(imageUrl);
                    }

                    // Parse dates for certifications
                    Certification certification = certifications.get(i);
                    if (certification.getIssueDate() != null) {
                        certification.setIssueDate(dateFormat.parse(dateFormat.format(certification.getIssueDate())));
                    }
                    if (certification.getExpiryDate() != null) {
                        certification.setExpiryDate(dateFormat.parse(dateFormat.format(certification.getExpiryDate())));
                    }
                }
            }
        }

        return companyRepository.save(company);
    }

    // Method to store file locally and return URL
    private String storeFileAndGetUrl(MultipartFile file, String subDirectory) throws IOException {
        Path uploadPath = Paths.get(UPLOAD_DIRECTORY, subDirectory);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate a unique filename to prevent collisions
        String originalFilename = file.getOriginalFilename();
        String fileExtension = "";
        if (originalFilename != null && originalFilename.contains(".")) {
            fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
        }

        String filename = UUID.randomUUID().toString() + fileExtension;
        Path filePath = uploadPath.resolve(filename);

        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // Return URL path that matches the resource handler configuration
        return "/" + UPLOAD_DIRECTORY + "/" + subDirectory + "/" + filename;
    }

    public Optional<Company> getCompanyById(String id) {
        return companyRepository.findById(id);
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Company updateCompany(String id, Company updatedCompany) {
        Optional<Company> existingCompanyOptional = companyRepository.findById(id);
        if (existingCompanyOptional.isPresent()) {
            Company existingCompany = existingCompanyOptional.get();

            // Update fields
            existingCompany.setCompanyName(updatedCompany.getCompanyName());
            existingCompany.setLicenseNumber(updatedCompany.getLicenseNumber());
            existingCompany.setShortDescription(updatedCompany.getShortDescription());
            existingCompany.setEstablishedYear(updatedCompany.getEstablishedYear());
            existingCompany.setLocation(updatedCompany.getLocation());
            existingCompany.setEmployeeCount(updatedCompany.getEmployeeCount());
            existingCompany.setServices(updatedCompany.getServices());
            existingCompany.setPastProjects(updatedCompany.getPastProjects());
            existingCompany.setAnnualRevenue(updatedCompany.getAnnualRevenue());
            existingCompany.setFundingSources(updatedCompany.getFundingSources());
            existingCompany.setCertifications(updatedCompany.getCertifications());
            existingCompany.setContactInformation(updatedCompany.getContactInformation());
            existingCompany.setCidaGrading(updatedCompany.getCidaGrading());
            existingCompany.setEngineerCapacity(updatedCompany.getEngineerCapacity());

            return companyRepository.save(existingCompany);
        } else {
            return null;
        }
    }

    public boolean deleteCompany(String id) {
        if (companyRepository.existsById(id)) {
            companyRepository.deleteById(id);
            return true;
        }
        return false;
    }
}