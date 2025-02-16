package com.innovastruct.InnovaStruct.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "CompanyProfile")
public class CompanyProfile {
    @Id
    private String id;
    private String name;
    private String bio;
    private String profileIcon;
    private String coverPicture;
    private String license;
    private List<PastProject> pastProjects;
    private String createdAt;
    private String updatedAt;
}
