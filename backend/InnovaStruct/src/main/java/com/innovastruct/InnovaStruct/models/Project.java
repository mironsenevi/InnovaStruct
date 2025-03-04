package com.innovastruct.InnovaStruct.models;


import lombok.Data;
import java.util.List;

@Data
public class Project {
    private String name; // Renamed from projectName to match form field
    private String description;
    private Integer completionYear; // New field from form, Integer type
    private List<String> images; // List of image URLs (after upload)
    // Removed startDate, endDate, projectLocation, clientName as they are not in the form
}
