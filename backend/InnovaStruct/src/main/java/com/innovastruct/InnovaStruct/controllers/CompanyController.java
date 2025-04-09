package com.innovastruct.InnovaStruct.controllers;


import com.innovastruct.InnovaStruct.models.Company;
import com.innovastruct.InnovaStruct.services.CompanyService;
import com.fasterxml.jackson.databind.ObjectMapper;
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
@RequestMapping("/company/portfolio")
@CrossOrigin(origins = "*", maxAge = 3600) // Allow cross-origin requests from all origins (for development)
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Company> createCompany(
            @RequestParam("companyData") String companyDataJson,
            @RequestParam(value = "projectImages", required = false) MultipartFile[] projectImages,
            @RequestParam(value = "certificateImages", required = false) MultipartFile[] certificateImages
    ) {
        try {
            Company company = objectMapper.readValue(companyDataJson, Company.class);
            Company createdCompany = companyService.createCompany(company, projectImages, certificateImages);
            return new ResponseEntity<>(createdCompany, HttpStatus.CREATED);
        } catch (IOException | ParseException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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
    public ResponseEntity<Company> updateCompany(
            @PathVariable String id,
            @RequestParam(value = "companyData", required = true) String companyDataJson,
            @RequestParam(value = "projectImages", required = false) MultipartFile[] projectImages,
            @RequestParam(value = "certificateImages", required = false) MultipartFile[] certificateImages
    ) {
        try {
            Company updatedCompany = objectMapper.readValue(companyDataJson, Company.class);
            Company company = companyService.updateCompany(id, updatedCompany);
            if (company != null) {
                return new ResponseEntity<>(company, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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
