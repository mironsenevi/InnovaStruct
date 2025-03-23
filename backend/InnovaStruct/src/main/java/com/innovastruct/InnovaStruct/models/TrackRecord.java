package com.innovastruct.InnovaStruct.models;

import java.util.List;

/**
 * Represents the track record of a company, including years of experience,
 * notable projects, and client satisfaction.
 */
public class TrackRecord {
    
    private int yearsOfExperience; // Number of years the company has been in operation
    private List<NotableProject> notableProjects; // List of notable projects completed by the company
    private ClientSatisfaction clientSatisfaction; // Client satisfaction data (ratings, feedback, challenges)

    /**
     * Default constructor.
     */
    public TrackRecord() {
    }

    // Getter and Setter methods for the fields

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public List<NotableProject> getNotableProjects() {
        return notableProjects;
    }

    public void setNotableProjects(List<NotableProject> notableProjects) {
        this.notableProjects = notableProjects;
    }

    public ClientSatisfaction getClientSatisfaction() {
        return clientSatisfaction;
    }

    public void setClientSatisfaction(ClientSatisfaction clientSatisfaction) {
        this.clientSatisfaction = clientSatisfaction;
    }

    /**
     * Represents a notable project undertaken by the company.
     */
    public static class NotableProject {
        
        private String title; // Title of the project
        private String image; // URL or path to an image representing the project
        private String description; // Description of the project

        /**
         * Default constructor.
         */
        public NotableProject() {
        }

        // Getter and Setter methods for the fields

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getImage() {
            return image;
        }

        public void setImage(String image) {
            this.image = image;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }
    }

    /**
     * Represents client satisfaction metrics, including ratings, feedback, and challenges.
     */
    public static class ClientSatisfaction {
        
        private double averageRating; // Average rating given by clients (out of 5)
        private List<String> positiveFeedback; // List of positive feedback from clients
        private List<String> challengesFaced; // List of challenges faced during projects

        /**
         * Default constructor.
         */
        public ClientSatisfaction() {
        }

        // Getter and Setter methods for the fields

        public double getAverageRating() {
            return averageRating;
        }

        public void setAverageRating(double averageRating) {
            this.averageRating = averageRating;
        }

        public List<String> getPositiveFeedback() {
            return positiveFeedback;
        }

        public void setPositiveFeedback(List<String> positiveFeedback) {
            this.positiveFeedback = positiveFeedback;
        }

        public List<String> getChallengesFaced() {
            return challengesFaced;
        }

        public void setChallengesFaced(List<String> challengesFaced) {
            this.challengesFaced = challengesFaced;
        }
    }
}
