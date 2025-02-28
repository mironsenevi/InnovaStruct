package com.innovastruct.Innovastruct.repositories;


import com.innovastruct.Innovastruct.models.Bid ;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface BidRepository extends MongoRepository<Bid, String> {
    List<Bid> findByTenderId(String tenderId);
}

