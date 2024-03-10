package com.habitTracker.backend;

import org.springframework.data.repository.CrudRepository;

public interface UserHabitRepository extends CrudRepository<UserHabit, Integer> {

}