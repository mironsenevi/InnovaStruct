package com.innovastruct.InnovaStruct.models;

import java.util.Date;

public class Bid {
    private Long id;
    private String tenderId;
    private String companyId;
    private double bidAmount;
    private String bidDetails;
    private Date submittedAt = new Date();

    public Bid(Long id, String tenderId, String companyId, double bidAmount, String bidDetails, Date submittedAt) {
        this.id = id;
        this.tenderId = tenderId;
        this.companyId = companyId;
        this.bidAmount = bidAmount;
        this.bidDetails = bidDetails;
        this.submittedAt = submittedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
