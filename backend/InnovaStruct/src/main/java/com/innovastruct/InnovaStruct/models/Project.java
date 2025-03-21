package com.innovastruct.InnovaStruct.models;


import lombok.Data;
import java.util.List;

@Data
public class Project {
    private String name; // renamed from projectName to match form field
    private String description;
    private Integer completionYear; // new field from form, Integer type
    private List<String> images; // list of image URLs (after upload)
    // removed startDate, endDate, projectLocation, clientName as they are not in the form
}
