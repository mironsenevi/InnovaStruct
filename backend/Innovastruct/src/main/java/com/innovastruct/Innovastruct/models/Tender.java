package com.innovastruct.InnovaStruct.models;

import org.springframework.data.annotation.Id;
import java.util.List;

public class Tender {
    @Id
    private String id;
    private String clientId;
    private String title;
    private String description;
    private String location;
    private String budgetRange;
    private List<String> projectDocuments;



    public Tender(String id, String clientId, String title, String description, String location, String budgetRange, List<String> projectDocuments) {
        this.id = id;
        this.clientId = clientId;
        this.title = title;
        this.description = description;
        this.location = location;
        this.budgetRange = budgetRange;
        this.projectDocuments = projectDocuments;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBudgetRange() {
        return budgetRange;
    }

    public void setBudgetRange(String budgetRange) {
        this.budgetRange = budgetRange;
    }

    public List<String> getProjectDocuments() {
        return projectDocuments;
    }

    public void setProjectDocuments(List<String> projectDocuments) {
        this.projectDocuments = projectDocuments;
    }
}
