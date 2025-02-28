package com.innovastruct.Innovastruct.models;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "tenders")
public class Tender {
    @Id
    private String id;
    private String clientId;
    private String title;
    private String description;
    private String plan;  // URL to plan file
    private String boq;   // URL to BOQ file
    private double budget;
    private Date deadline;
    private String status = "open"; // Default status
    private Date createdAt = new Date();

    // Constructors, Getters, and Setters
}

