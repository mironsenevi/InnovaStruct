package com.innovastruct.InnovaStruct.repositories;


import com.innovastruct.InnovaStruct.models.Company ;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
    // Spring Data MongoDB provides basic CRUD operations (save, findById, findAll, delete, etc.)
    // You can add custom query methods here if needed later.
}