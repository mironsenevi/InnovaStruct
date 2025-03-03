package com.innovastruct.InnovaStruct.services;



import com.innovastruct.InnovaStruct.models.Company ;
import com.innovastruct.InnovaStruct.models.Project ;
import com.innovastruct.InnovaStruct.models.Certification ;
import com.innovastruct.InnovaStruct.repositories.CompanyRepository ;
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

    private final String UPLOAD_DIRECTORY = "uploads"; // Directory to store uploaded files (local for now)
    private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd"); // For parsing date strings

    public Company createCompany(Company company,
                                 MultipartFile[] projectImageFiles, // Array to match multiple files per project from form
                                 MultipartFile[] certificateImageFiles) throws ParseException, IOException { // Assuming single certificate image per certification for now

        // 1. Handle Project Images Upload and Update Project Image URLs
        if (projectImageFiles != null && projectImageFiles.length > 0) {
            List<Project> projects = company.getPastProjects();
            if (projects != null) {
                for (int projectIndex = 0; projectIndex < projects.size(); projectIndex++) {
                    Project project = projects.get(projectIndex);
                    List<String> imageUrls = new ArrayList<>();
                    if (projectImageFiles.length > projectIndex && projectImageFiles[projectIndex] != null && projectImageFiles[projectIndex].getSize() > 0) {
                        final int currentIndex = projectIndex; // Create a final variable for use in lambda
                        MultipartFile[] filesForProject = projectImageFiles[currentIndex].getOriginalFilename().split(",").length > 1
                                ? Arrays.stream(projectImageFiles[currentIndex].getOriginalFilename().split(","))
                                .map(filename -> projectImageFiles[currentIndex])
                                .toArray(MultipartFile[]::new)
                                : new MultipartFile[]{projectImageFiles[currentIndex]};

                        if (filesForProject != null) {
                            for (MultipartFile file : filesForProject) {
                                if (file != null && !file.isEmpty()) {
                                    String imageUrl = storeFileAndGetUrl(file, "project-images");
                                    imageUrls.add(imageUrl);
                                }
                            }
                        }
                    }
                    project.setImages(imageUrls);
                    projects.set(projectIndex, project);
                }
                company.setPastProjects(projects);
            }
        }


        // 2. Handle Certificate Images Upload and Update Certification Image URLs
        if (certificateImageFiles != null && certificateImageFiles.length > 0) {
            List<Certification> certifications = company.getCertifications();
            if (certifications != null) {
                for (int i = 0; i < certifications.size(); i++) {
                    Certification certification = certifications.get(i);
                    if (certificateImageFiles.length > i && certificateImageFiles[i] != null && !certificateImageFiles[i].isEmpty()) {
                        String imageUrl = storeFileAndGetUrl(certificateImageFiles[i], "certificate-images");
                        certification.setImageUrl(imageUrl);
                    }
                    // Parse and set Date objects for issueDate and expiryDate
                    if (certification.getIssueDate() != null) {
                        certification.setIssueDate(dateFormat.parse(dateFormat.format(certification.getIssueDate()))); // Parse and format to handle date only
                    }
                    if (certification.getExpiryDate() != null) {
                        certification.setExpiryDate(dateFormat.parse(dateFormat.format(certification.getExpiryDate())));
                    }
                    certifications.set(i, certification); // Update certification in the list
                }
                company.setCertifications(certifications); // Update company's certification list
            }
        }
        // 3. Create Contact Information object from form data
        if (company.getContactInformation() == null) {
            company.setContactInformation(new com.innovastruct.InnovaStruct.models.ContactInformation());
        }
        // Contact information is already set in controller, no need to set here again unless needed.

        return companyRepository.save(company);
    }


    // Method to store file locally and return URL (for demonstration - replace with cloud storage in production)
    private String storeFileAndGetUrl(MultipartFile file, String subDirectory) throws IOException {
        Path uploadPath = Paths.get(UPLOAD_DIRECTORY, subDirectory);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        String filename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename(); // Unique filename
        Path filePath = uploadPath.resolve(filename);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        return "/" + UPLOAD_DIRECTORY + "/" + subDirectory + "/" + filename; // Return relative URL - adjust as needed for your frontend and file serving setup
    }


    // ... other service methods (getCompanyById, getAllCompanies, updateCompany, deleteCompany, etc.) remain similar ...
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
            // Update fields you want to allow updating
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