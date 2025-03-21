package com.innovastruct.InnovaStruct.models;



import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Department model class that represents organizational departments within a company.
 * This class helps in structuring the company hierarchy and organizing users
 * based on their functional areas in the organization.
 */
public class Department {
    // Primary identifier for the department
    private Long id;
    // Name of the department (e.g., Engineering, Marketing, Finance)
    private String name;
    // Description of the department's purpose and responsibilities
    private String description;
    // Department code/abbreviation (e.g., ENG, MKT, FIN)
    private String code;
    // Reference to the parent department (for hierarchical structure)
    private Department parentDepartment;
    // List of child departments under this department
    private List<Department> subDepartments;
    // Reference to the company this department belongs to
    private Company company;
    // Reference to the department head/manager
    private User departmentHead;
    // List of all users in this department
    private List<User> members;
    // Budget allocated to this department
    private Double annualBudget;
    // Timestamp when the department was created
    private Date createdAt;
    // Timestamp when the department was last updated
    private Date updatedAt;
    // Flag indicating if the department is active
    private boolean active;

    /**
     * Default constructor for creating an empty Department object.
     * Used primarily by frameworks and ORM tools.
     */
    public Department() {
        this.subDepartments = new ArrayList<>();
        this.members = new ArrayList<>();
    }

    /**
     * Parameterized constructor for creating a Department with essential information.
     * Sets creation date to current time and marks the department as active by default.
     *
     * @param id          Unique identifier for the department
     * @param name        Name of the department
     * @param description Description of the department
     * @param code        Department code/abbreviation
     * @param company     Company this department belongs to
     */
    public Department(Long id, String name, String description, String code, Company company) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.code = code;
        this.company = company;
        this.subDepartments = new ArrayList<>();
        this.members = new ArrayList<>();
        this.createdAt = new Date();
        this.active = true;
    }

    /**
     * Gets the department's unique identifier.
     * @return The department ID
     */
    public Long getId() {
        return id;
    }

    /**
     * Sets the department's unique identifier.
     * @param id The department ID to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Gets the department name.
     * @return The department name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the department name.
     * @param name The department name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the department description.
     * @return The department description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets the department description.
     * @param description The department description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Gets the department code/abbreviation.
     * @return The department code
     */
    public String getCode() {
        return code;
    }

    /**
     * Sets the department code/abbreviation.
     * @param code The department code to set
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * Gets the parent department.
     * @return The parent department
     */
    public Department getParentDepartment() {
        return parentDepartment;
    }

    /**
     * Sets the parent department.
     * @param parentDepartment The parent department to set
     */
    public void setParentDepartment(Department parentDepartment) {
        this.parentDepartment = parentDepartment;
    }

    /**
     * Gets the list of sub-departments.
     * @return The list of sub-departments
     */
    public List<Department> getSubDepartments() {
        return subDepartments;
    }

    /**
     * Sets the list of sub-departments.
     * @param subDepartments The list of sub-departments to set
     */
    public void setSubDepartments(List<Department> subDepartments) {
        this.subDepartments = subDepartments;
    }

    /**
     * Gets the company this department belongs to.
     * @return The company
     */
    public Company getCompany() {
        return company;
    }

    /**
     * Sets the company this department belongs to.
     * @param company The company to set
     */
    public void setCompany(Company company) {
        this.company = company;
    }

    /**
     * Gets the department head/manager.
     * @return The department head
     */
    public User getDepartmentHead() {
        return departmentHead;
    }

    /**
     * Sets the department head/manager.
     * @param departmentHead The department head to set
     */
    public void setDepartmentHead(User departmentHead) {
        this.departmentHead = departmentHead;
    }

    /**
     * Gets the list of department members.
     * @return The list of members
     */
    public List<User> getMembers() {
        return members;
    }

    /**
     * Sets the list of department members.
     * @param members The list of members to set
     */
    public void setMembers(List<User> members) {
        this.members = members;
    }

    /**
     * Gets the annual budget allocated to this department.
     * @return The annual budget
     */
    public Double getAnnualBudget() {
        return annualBudget;
    }

    /**
     * Sets the annual budget allocated to this department.
     * @param annualBudget The annual budget to set
     */
    public void setAnnualBudget(Double annualBudget) {
        this.annualBudget = annualBudget;
    }

    /**
     * Gets the timestamp when the department was created.
     * @return The creation timestamp
     */
    public Date getCreatedAt() {
        return createdAt;
    }

    /**
     * Sets the timestamp when the department was created.
     * @param createdAt The creation timestamp to set
     */
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    /**
     * Gets the timestamp when the department was last updated.
     * @return The update timestamp
     */
    public Date getUpdatedAt() {
        return updatedAt;
    }

    /**
     * Sets the timestamp when the department was last updated.
     * @param updatedAt The update timestamp to set
     */
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    /**
     * Checks if the department is active.
     * @return true if the department is active, false otherwise
     */
    public boolean isActive() {
        return active;
    }

    /**
     * Sets the active status of the department.
     * @param active The active status to set
     */
    public void setActive(boolean active) {
        this.active = active;
    }

    /**
     * Adds a member to this department.
     * @param user The user to add as a member
     * @return true if the member was added, false if already a member
     */
    public boolean addMember(User user) {
        if (!members.contains(user)) {
            return members.add(user);
        }
        return false;
    }

    /**
     * Removes a member from this department.
     * @param user The user to remove
     * @return true if the member was removed, false if not a member
     */
    public boolean removeMember(User user) {
        return members.remove(user);
    }

    /**
     * Adds a sub-department to this department.
     * @param department The department to add as a sub-department
     * @return true if the sub-department was added
     */
    public boolean addSubDepartment(Department department) {
        department.setParentDepartment(this);
        return subDepartments.add(department);
    }

    /**
     * Returns a string representation of the Department object.
     * 
     * @return A string representation of the Department object
     */
    @Override
    public String toString() {
        return "Department{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", code='" + code + '\'' +
                ", company=" + (company != null ? company.getName() : "null") +
                ", departmentHead=" + (departmentHead != null ? departmentHead.getUsername() : "null") +
                ", memberCount=" + (members != null ? members.size() : 0) +
                ", active=" + active +
                '}';
    }
}
