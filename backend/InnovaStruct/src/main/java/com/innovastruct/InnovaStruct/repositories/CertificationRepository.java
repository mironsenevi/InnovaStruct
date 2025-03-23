package com.innovastruct.InnovaStruct.repositories;

import com.example.backend.model.Certification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificationRepository extends MongoRepository<Certification, String> {
}