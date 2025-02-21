package com.innovastruct.InnovaStruct.repository;

import com.innovastruct.InnovaStruct.model.CompanyProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyProfileRepository extends MongoRepository<CompanyProfile, String> {
    Optional<CompanyProfile> findByName(String name);
}
