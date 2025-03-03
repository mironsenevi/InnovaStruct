package com.innovastruct.Innovastruct.service;

import com.innovastruct.Innovastruct.model.CompanyProfile;
import com.innovastruct.Innovastruct.repository.CompanyProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyProfileService {

    @Autowired
    private CompanyProfileRepository companyProfileRepository;

    // Create or update company profile
    public CompanyProfile saveCompanyProfile(CompanyProfile profile) {
        profile.setUpdatedAt(Instant.now().toString()); // Set updated timestamp
        if (profile.getId() == null) {
            profile.setCreatedAt(Instant.now().toString()); // Set created timestamp if new
        }
        return companyProfileRepository.save(profile);
    }

    // Get all company profiles
    public List<CompanyProfile> getAllCompanies() {
        return companyProfileRepository.findAll();
    }

    // Get a single company profile by ID
    public Optional<CompanyProfile> getCompanyById(String id) {
        return companyProfileRepository.findById(id);
    }

    // Delete a company profile
    public void deleteCompanyById(String id) {
        companyProfileRepository.deleteById(id);
    }
}
