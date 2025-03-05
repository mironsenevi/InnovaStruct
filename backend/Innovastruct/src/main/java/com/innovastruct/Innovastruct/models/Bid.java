package com.innovastruct.Innovastruct.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "bids")
public class Bid {
    @Id
    private String id;
    private String tenderId;
    private String companyId;
    private double bidAmount;
    private String bidDetails;
    private Date submittedAt = new Date();

    public Bid(String id, String tenderId, String companyId, double bidAmount, Date submittedAt, String bidDetails) {
        this.id = id;
        this.tenderId = tenderId;
        this.companyId = companyId;
        this.bidAmount = bidAmount;
        this.submittedAt = submittedAt;
        this.bidDetails = bidDetails;
    }

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

    public double getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(double bidAmount) {
        this.bidAmount = bidAmount;
    }

    public String getBidDetails() {
        return bidDetails;
    }

    public void setBidDetails(String bidDetails) {
        this.bidDetails = bidDetails;
    }

    public Date getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(Date submittedAt) {
        this.submittedAt = submittedAt;
    }
}
