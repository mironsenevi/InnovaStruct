package com.innovastruct.Innovastruct.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "bids")
public class Bid {
    @Id
    private String id;
    private String tenderId;
    private String companyId;
    private double bidAmount;
    private String bidDetails;
    private Date submittedAt = new Date();

    // Constructors, Getters, and Setters
}

