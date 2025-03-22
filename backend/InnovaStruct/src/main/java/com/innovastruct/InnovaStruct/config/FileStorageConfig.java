package com.innovastruct.InnovaStruct.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class FileStorageConfig implements WebMvcConfigurer {

    // Define the upload directory - must match the one in CompanyService
    private final String uploadDirectory = "uploads";

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Map URL path to the physical location of the uploaded files
        Path uploadDir = Paths.get(uploadDirectory);
        String uploadPath = uploadDir.toFile().getAbsolutePath();

        // This configuration allows accessing images through URLs like /uploads/**
        registry.addResourceHandler("/" + uploadDirectory + "/**")
                .addResourceLocations("file:" + uploadPath + "/");
    }
}