package com.innovastruct.InnovaStruct.controllers;

import java.util.List;

public class ProjectController {
    private int id;
    private String name; // Renamed from projectName to match form field
    private String description;
    private Integer completionYear; // New field from form, Integer type
    private List<String> images; // List of image URLs (after upload)
    // Removed startDate, endDate, projectLocation, clientName as they are not in the form

}
