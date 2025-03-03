package com.innovastruct.InnovaStruct.models;



import lombok.Data;

@Data
public class ContactInformation {
    private String email;
    private String phone;
    private String website;
    private String linkedin; // If you want to include LinkedIn from form, add this
}