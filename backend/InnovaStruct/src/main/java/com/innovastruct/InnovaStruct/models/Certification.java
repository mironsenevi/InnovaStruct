package com.innovastruct.InnovaStruct.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * Represents a certification awarded to a company.
 * This class is mapped to the "certifications" collection in MongoDB.
 */
@Document(collection = "certifications")
public class Certification {

    @Id // Marks this field as the primary key in MongoDB
    private String id;

    private String name; // Name of the certification
    private String organization; // Issuing organization
    private String issueDate; // Date the certification was issued
    private String expiryDate; // Expiry date of the certification (if applicable)
    private String imageUrl; // URL of the certification image or document

    @DBRef // Establishes a reference to the Company entity in MongoDB
    @JsonBackReference // Prevents infinite recursion during JSON serialization
    private Company company;

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(String issueDate) {
        this.issueDate = issueDate;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
