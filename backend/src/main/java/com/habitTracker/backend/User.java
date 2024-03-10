package com.habitTracker.backend;

import jakarta.persistence.*;
import java.util.Set;


@Entity // This tells Hibernate to make a table out of this class
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(name = "user_id")  // Specify the column name to match UserHabit
  private Integer user_id;

  @Column(nullable = false) // Set the nullable attribute to false
  private String username;

  private String email;

  @Column(nullable = false) // Set the nullable attribute to false
  private String password;

  @OneToMany(mappedBy = "user")
  private Set<UserHabit> userHabits;


  public Integer getId() {
    return user_id;
  }

  public void setId(Integer id) {
    this.user_id = id;
  }

  public String getName() {
    return username;
  }

  public void setName(String name) {
    this.username = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() { return password;}

  public void setPassword(String password) { this.password = password; }

  public Set<UserHabit> getUserHabits() {
    return userHabits;
  }

  public void setUserHabits(Set<UserHabit> userHabits) {
    this.userHabits = userHabits;
  }

}
