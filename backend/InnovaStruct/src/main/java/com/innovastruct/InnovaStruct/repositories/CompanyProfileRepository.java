package com.innovastruct.InnovaStruct.repositories;

import com.innovastruct.InnovaStruct.models.CompanyProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyProfileRepository extends MongoRepository<CompanyProfile, String> {
    Optional<CompanyProfile> findByName(String name);
}
