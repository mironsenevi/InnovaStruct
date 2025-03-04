package com.innovastruct.InnovaStruct.models;

// Company.java

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "companies")
@Data
public class Company {

    @Id
    private String id;

    private String companyName;
    private String licenseNumber;
    private String shortDescription; // Renamed from 'bio' to match form field
    private Integer establishedYear; // Changed to Integer to match form input type
    private String location; // You can keep it or remove if not used
    private Integer employeeCount; // Changed to Integer
    private List<String> services; // List of strings for selected services
    private List<Project> pastProjects;
    private String annualRevenue;
    private String fundingSources;
    private List<Certification> certifications; // New list for certifications
    private ContactInformation contactInformation;
    private String cidaGrading; // New field from form
    private Integer engineerCapacity; // New field from form, Integer type

    // No License object anymore as License Number is directly in Company.
    // If you need more license details in future  you can reintroduce License object.

    // Constructors, Getters, Setters (Lombok @Data handles these)
}