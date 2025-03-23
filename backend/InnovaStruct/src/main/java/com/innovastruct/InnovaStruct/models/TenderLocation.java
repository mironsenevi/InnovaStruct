package com.innovastruct.InnovaStruct.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

/**
 * Represents the location of a tender, including its district, coordinates, active tenders, and total value.
 * This class is mapped to the "tender_locations" collection in MongoDB.
 */
@Document(collection = "tender_locations")
public class TenderLocation {
    
    @Id
    private String id;  // Unique identifier for the tender location
    private String district;  // The district where the tender is located
    private Coordinates coordinates;  // The geographic coordinates (latitude and longitude) of the tender location
    private int tenderCount;  // The number of tenders available in this location
    private List<ActiveTender> activeTenders;  // A list of active tenders in this location
    private double totalValue;  // The total value of the tenders in this location

    /**
     * Represents the geographic coordinates of the tender location.
     */
    public static class Coordinates {
        
        private double lat;  // Latitude of the location
        private double lng;  // Longitude of the location

        /**
         * Default constructor for Coordinates.
         */
        public Coordinates() {
        }

        /**
         * Constructor to initialize the coordinates with latitude and longitude.
         */
        public Coordinates(double lat, double lng) {
            this.lat = lat;
            this.lng = lng;
        }

        // Getter and Setter methods for the coordinates

        public double getLat() {
            return lat;
        }

        public void setLat(double lat) {
            this.lat = lat;
        }

        public double getLng() {
            return lng;
        }

        public void setLng(double lng) {
            this.lng = lng;
        }
    }

    /**
     * Represents an active tender in a given location, containing the tender's ID, title, and budget.
     */
    public static class ActiveTender {
        
        private String id;  // Unique identifier for the active tender
        private String title;  // Title or name of the active tender
        private double budget;  // Budget allocated for the tender

        /**
         * Default constructor for ActiveTender.
         */
        public ActiveTender() {
        }

        /**
         * Constructor to initialize an active tender with its ID, title, and budget.
         */
        public ActiveTender(String id, String title, double budget) {
            this.id = id;
            this.title = title;
            this.budget = budget;
        }

        // Getter and Setter methods for the active tender details

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

        public double getBudget() {
            return budget;
        }

        public void setBudget(double budget) {
            this.budget = budget;
        }
    }

    /**
     * Default constructor for TenderLocation.
     */
    public TenderLocation() {
    }

    // Getter and Setter methods for the tender location details

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public Coordinates getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(Coordinates coordinates) {
        this.coordinates = coordinates;
    }

    public int getTenderCount() {
        return tenderCount;
    }

    public void setTenderCount(int tenderCount) {
        this.tenderCount = tenderCount;
    }

    public List<ActiveTender> getActiveTenders() {
        return activeTenders;
    }

    public void setActiveTenders(List<ActiveTender> activeTenders) {
        this.activeTenders = activeTenders;
    }

    public double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(double totalValue) {
        this.totalValue = totalValue;
    }
}
