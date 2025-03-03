package com.innovastruct.InnovaStruct.controllers;



import com.innovastruct.InnovaStruct.models.Company ;
import com.innovastruct.InnovaStruct.services.CompanyService ;
import com.fasterxml.jackson.databind.ObjectMapper; // For converting JSON string to Company object
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin(origins = "http://localhost:3000") // Adjust origin as needed
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private ObjectMapper objectMapper; // To map JSON string to Company object

    @PostMapping(consumes = {"multipart/form-data"}) // Handle multipart/form-data requests
    public ResponseEntity<Company> createCompany(
            @RequestParam("companyData") String companyDataJson, // Form data as JSON string
            @RequestParam(value = "projectImages", required = false) MultipartFile[] projectImages, // Project images
            @RequestParam(value = "certificateImages", required = false) MultipartFile[] certificateImages // Certificate images
    ) throws ParseException, IOException {
        try {
            Company company = objectMapper.readValue(companyDataJson, Company.class); // Convert JSON string to Company object

            // Handle Contact Information - it's nested in form data, so need to parse separately if not directly mapped
            // Since your form sends contact info as part of companyData, Jackson should handle it automatically if structure matches.
            // If not working, you might need to manually create ContactInformation from parts of companyDataJson.

            Company createdCompany = companyService.createCompany(company, projectImages, certificateImages);
            return new ResponseEntity<>(createdCompany, HttpStatus.CREATED);
        } catch (IOException | ParseException e) {
            e.printStackTrace(); // Log the error properly in production
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // Or HttpStatus.INTERNAL_SERVER_ERROR depending on the error type
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable String id) {
        Optional<Company> company = companyService.getCompanyById(id);
        return company.map(ResponseEntity::ok)
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companies = companyService.getAllCompanies();
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable String id, @RequestBody Company updatedCompany) {
        Company company = companyService.updateCompany(id, updatedCompany);
        if (company != null) {
            return new ResponseEntity<>(company, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCompany(@PathVariable String id) {
        if (companyService.deleteCompany(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
