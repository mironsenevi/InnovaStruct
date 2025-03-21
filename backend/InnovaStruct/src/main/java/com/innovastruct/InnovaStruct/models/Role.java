package com.innovastruct.InnovaStruct.models;


    

    import java.util.Date;
    import java.util.Set;
    
    /**
     * Role model class that represents user roles and permissions in the system.
     * This class is used for implementing role-based access control (RBAC)
     * to manage authorization for different system functionalities.
     */
    public class Role {
        // Primary identifier for the role
        private Long id;
        // Name of the role (e.g., ADMIN, USER, MANAGER)
        private String name;
        // Description of the role's purpose and responsibilities
        private String description;
        // Set of permission strings associated with this role
        private Set<String> permissions;
        // Timestamp when the role was created
        private Date createdAt;
        // Timestamp when the role was last updated
        private Date updatedAt;
        // Users assigned to this role
        private boolean active;
    
        /**
         * Default constructor for creating an empty Role object.
         * Used primarily by frameworks and ORM tools.
         */
        public Role() {
        }
    
        /**
         * Parameterized constructor for creating a Role with essential information.
         * Sets creation date to current time and marks the role as active by default.
         *
         * @param id           Unique identifier for the role
         * @param name         Name of the role
         * @param description  Description of the role
         * @param permissions  Set of permissions associated with the role
         */
        public Role(Long id, String name, String description, Set<String> permissions) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.permissions = permissions;
            this.createdAt = new Date();
            this.active = true;
        }
    
        /**
         * Gets the role's unique identifier.
         * @return The role ID
         */
        public Long getId() {
            return id;
        }
    
        /**
         * Sets the role's unique identifier.
         * @param id The role ID to set
         */
        public void setId(Long id) {
            this.id = id;
        }
    
        /**
         * Gets the role name.
         * @return The role name
         */
        public String getName() {
            return name;
        }
    
        /**
         * Sets the role name.
         * @param name The role name to set
         */
        public void setName(String name) {
            this.name = name;
        }
    
        /**
         * Gets the role description.
         * @return The role description
         */
        public String getDescription() {
            return description;
        }
    
        /**
         * Sets the role description.
         * @param description The role description to set
         */
        public void setDescription(String description) {
            this.description = description;
        }
    
        /**
         * Gets the set of permissions associated with this role.
         * @return The set of permissions
         */
        public Set<String> getPermissions() {
            return permissions;
        }
    
        /**
         * Sets the permissions for this role.
         * @param permissions The set of permissions to set
         */
        public void setPermissions(Set<String> permissions) {
            this.permissions = permissions;
        }
    
        /**
         * Gets the timestamp when the role was created.
         * @return The creation timestamp
         */
        public Date getCreatedAt() {
            return createdAt;
        }
    
        /**
         * Sets the timestamp when the role was created.
         * @param createdAt The creation timestamp to set
         */
        public void setCreatedAt(Date createdAt) {
            this.createdAt = createdAt;
        }
    
        /**
         * Gets the timestamp when the role was last updated.
         * @return The update timestamp
         */
        public Date getUpdatedAt() {
            return updatedAt;
        }
    
        /**
         * Sets the timestamp when the role was last updated.
         * @param updatedAt The update timestamp to set
         */
        public void setUpdatedAt(Date updatedAt) {
            this.updatedAt = updatedAt;
        }
    
       
    
        /**
         * Returns a string representation of the Role object.
         * 
         * @return A string representation of the Role object
         */
        @Override
        public String toString() {
            return "Role{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    ", description='" + description + '\'' +
                    ", permissions=" + permissions +
                    ", active=" + active +
                    '}';
        }
    }
    
