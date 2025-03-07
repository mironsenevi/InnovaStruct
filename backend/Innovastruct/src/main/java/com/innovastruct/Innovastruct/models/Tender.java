package com.innovastruct.Innovastruct.models;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;


public class Tender {
    @Id
    private String id;
    private String clientId;
    private String title;
    private String description;
    private String location;
    private String plan;
    private String boq;
    private double budget;
    private Date deadline;
    private String status = "open";
    private Date createdAt = new Date();
    private List<String> projectDocuments;


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

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public String getBoq() {
        return boq;
    }

    public void setBoq(String boq) {
        this.boq = boq;
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<String> getProjectDocuments() {
        return projectDocuments;
    }

    public void setProjectDocuments(List<String> projectDocuments) {
        this.projectDocuments = projectDocuments;
    }
}
