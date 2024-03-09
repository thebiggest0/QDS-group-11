package com.habitTracker.backend;

import jakarta.persistence.*;
import java.util.Set;

@Entity // This tells Hibernate to make a table out of this class
public class Habit {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "habit_id")  // Specify the column name to match UserHabit
    private Integer habit_id;

    @Column(nullable = false) // Set the nullable attribute to false
    private String habit_name;

    private String icon;

    private String color;

    private String habit_type;

    private String goal;

    private String startDate;

    private String endDate;

    public String getHabit_desc() {
        return habit_desc;
    }

    @OneToMany(mappedBy = "habit")
    private Set<UserHabit> userHabits;


    public void setHabit_desc(String habit_desc) {
        this.habit_desc = habit_desc;
    }

    private String habit_desc;

    public Integer getHabit_id() {
        return habit_id;
    }

    public void setHabit_id(Integer habit_id) {
        this.habit_id = habit_id;
    }

    public String getHabit_name() {
        return habit_name;
    }

    public void setHabit_name(String habit_name) {
        this.habit_name = habit_name;
    }

    public Set<UserHabit> getUserHabits() {
        return userHabits;
    }

    public void setUserHabits(Set<UserHabit> userHabits) {
        this.userHabits = userHabits;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getHabit_type() {
        return habit_type;
    }

    public void setHabit_type(String habit_type) {
        this.habit_type = habit_type;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
