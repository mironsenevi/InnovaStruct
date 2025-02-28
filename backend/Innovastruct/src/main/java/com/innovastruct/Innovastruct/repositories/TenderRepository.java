package com.innovastruct.Innovastruct.repositories;


import com.innovastruct.Innovastruct.models.Tender;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TenderRepository extends MongoRepository<Tender, String> {
    List<Tender> findByStatus(String status);
}
