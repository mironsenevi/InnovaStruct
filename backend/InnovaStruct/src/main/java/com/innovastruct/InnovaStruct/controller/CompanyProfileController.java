package com.innovastruct.InnovaStruct.controller;

import com.innovastruct.InnovaStruct.model.CompanyProfile;
import com.innovastruct.InnovaStruct.service.CompanyProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/companies")
public class CompanyProfileController {

    @Autowired
    private CompanyProfileService companyProfileService;

    // Create or update company profile
    @PostMapping
    public ResponseEntity<CompanyProfile> saveCompanyProfile(@RequestBody CompanyProfile profile) {
        CompanyProfile savedProfile = companyProfileService.saveCompanyProfile(profile);
        return ResponseEntity.ok(savedProfile);
    }

    // Get all company profiles
    @GetMapping
    public ResponseEntity<List<CompanyProfile>> getAllCompanies() {
        return ResponseEntity.ok(companyProfileService.getAllCompanies());
    }

    // Get a single company profile by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getCompanyById(@PathVariable String id) {
        Optional<CompanyProfile> profile = companyProfileService.getCompanyById(id);
        return profile.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a company profile by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCompanyById(@PathVariable String id) {
        companyProfileService.deleteCompanyById(id);
        return ResponseEntity.ok("Company profile deleted successfully.");
    }
}
