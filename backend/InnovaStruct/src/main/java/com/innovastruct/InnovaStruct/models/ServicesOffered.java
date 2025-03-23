package com.innovastruct.InnovaStruct.models;

import java.util.List;

/**
 * Represents the services offered by a company.
 * This class includes primary services, specializations, certifications, and service capabilities.
 */
public class ServicesOffered {
    
    private List<String> primaryServices;  // List of the primary services offered by the company
    private List<String> specializations;  // List of the areas of specialization of the company
    private List<String> certifications;   // List of certifications the company holds
    private ServiceCapabilities serviceCapabilities;  // Represents the service capabilities of the company

    /**
     * Default constructor.
     */
    public ServicesOffered() {
    }

    // Getter and Setter methods for accessing and modifying the fields

    public List<String> getPrimaryServices() {
        return primaryServices;
    }

    public void setPrimaryServices(List<String> primaryServices) {
        this.primaryServices = primaryServices;
    }

    public List<String> getSpecializations() {
        return specializations;
    }

    public void setSpecializations(List<String> specializations) {
        this.specializations = specializations;
    }

    public List<String> getCertifications() {
        return certifications;
    }

    public void setCertifications(List<String> certifications) {
        this.certifications = certifications;
    }

    public ServiceCapabilities getServiceCapabilities() {
        return serviceCapabilities;
    }

    public void setServiceCapabilities(ServiceCapabilities serviceCapabilities) {
        this.serviceCapabilities = serviceCapabilities;
    }

    /**
     * Represents the service capabilities of the company.
     * It includes project scale, geographic coverage, and special equipment the company can provide.
     */
    public static class ServiceCapabilities {
        
        private String projectScale;          // Scale of the projects the company is capable of handling (e.g., small, medium, large)
        private String geographicCoverage;   // Geographic area where the company operates
        private List<String> specialEquipment;  // List of special equipment that the company can provide

        /**
         * Default constructor for ServiceCapabilities.
         */
        public ServiceCapabilities() {
        }

        // Getter and Setter methods for accessing and modifying the fields

        public String getProjectScale() {
            return projectScale;
        }

        public void setProjectScale(String projectScale) {
            this.projectScale = projectScale;
        }

        public String getGeographicCoverage() {
            return geographicCoverage;
        }

        public void setGeographicCoverage(String geographicCoverage) {
            this.geographicCoverage = geographicCoverage;
        }

        public List<String> getSpecialEquipment() {
            return specialEquipment;
        }

        public void setSpecialEquipment(List<String> specialEquipment) {
            this.specialEquipment = specialEquipment;
        }
    }
}
