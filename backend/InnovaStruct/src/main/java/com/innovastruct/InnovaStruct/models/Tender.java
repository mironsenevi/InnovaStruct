package com.innovastruct.InnovaStruct.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import java.util.ArrayList;

/**
 * Represents a tender created by a client.
 * This class is mapped to the "tenders" collection in MongoDB.
 */
@Document(collection = "tenders")
public class Tender {
    
    @Id // Marks this field as the primary key in MongoDB
    private String id;

    private String title; // Title of the tender
    private String description; // Detailed description of the tender
    private double budget; // Budget allocated for the tender
    private String deadline; // Deadline for the tender submission
    private String status; // Current status of the tender: "new", "active", "ended"
    private int bidsCount; // Number of bids placed for this tender
    private Double lowestBid; // Lowest bid amount placed for the tender
    private String createdAt; // Timestamp when the tender was created
    private String clientId; // ID of the client who created the tender
    private List<String> bidIds; // List of bid IDs (not full bid objects) associated with the tender

    /**
     * Default constructor.
     * Initializes the bidIds list to prevent NullPointerExceptions.
     */
    public Tender() {
        this.bidIds = new ArrayList<>();
    }

    // Getter and Setter methods for accessing and modifying tender attributes

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getBidsCount() {
        return bidsCount;
    }

    public void setBidsCount(int bidsCount) {
        this.bidsCount = bidsCount;
    }

    public Double getLowestBid() {
        return lowestBid;
    }

    public void setLowestBid(Double lowestBid) {
        this.lowestBid = lowestBid;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public List<String> getBidIds() {
        return bidIds;
    }

    public void setBidIds(List<String> bidIds) {
        this.bidIds = bidIds;
    }
}
