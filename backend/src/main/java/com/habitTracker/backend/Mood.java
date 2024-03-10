package com.habitTracker.backend;

import jakarta.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Mood {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(nullable = false) // Set the nullable attribute to false
    private Integer mood_id;

    private String mood_date;
    private String mood;

    @Column(name = "reason", length = 500)
    private String reason;

    @Column(name = "note", length = 500)
    private String note;

    public Integer getMood_id() { return mood_id; }

    public String getMood_date() { return mood_date; }

    public void setMood_date(String mood_date) { this.mood_date = mood_date;}

    public String getMood() { return mood; }

    public void setMood(String mood) { this.mood = mood; }

    public String getReason() { return reason; }

    public void setReason(String reason) { this.reason = reason; }

    public String getNote() { return note; }

    public void setNote(String note) { this.note = note;}
}
