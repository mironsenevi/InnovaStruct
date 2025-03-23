package com.innovastruct.InnovaStruct.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents a bid submitted by a company for a tender.
 * This class is mapped to the "bids" collection in MongoDB.
 */
@Document(collection = "bids")
public class Bid {
    
    @Id // Marks this field as the primary key in MongoDB
    private String id;

    private String tenderId; // ID of the tender this bid is associated with
    private String companyId; // ID of the company that placed the bid
    private String companyName; // Name of the company placing the bid
    private double amount; // Bid amount proposed by the company
    private String proposedDeadline; // Proposed completion date for the project
    private String message; // Additional message from the bidder
    private String status; // Status of the bid: "pending", "accepted", "rejected"
    private String createdAt; // Timestamp when the bid was created

    /**
     * Default constructor.
     */
    public Bid() {
    }

    // Getter and Setter methods for accessing and modifying bid attributes.

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTenderId() {
        return tenderId;
    }

    public void setTenderId(String tenderId) {
        this.tenderId = tenderId;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getProposedDeadline() {
        return proposedDeadline;
    }

    public void setProposedDeadline(String proposedDeadline) {
        this.proposedDeadline = proposedDeadline;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
