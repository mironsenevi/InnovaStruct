package com.innovastruct.InnovaStruct.models;


import lombok.Data;
import java.util.Date;

@Data
public class Certification {
    private String name; // Certification Name
    private String organization; // Issuing Organization
    private Date issueDate;        // Date of issue
    private Date expiryDate; // Optional expiry date
    private String imageUrl; // URL to the uploaded certificate image/document
}