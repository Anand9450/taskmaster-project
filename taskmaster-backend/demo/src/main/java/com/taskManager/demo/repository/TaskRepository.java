package com.taskManager.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.taskManager.demo.model.Task;

// This magic interface gives us methods like save(), findAll(), delete() for free!
public interface TaskRepository extends JpaRepository<Task, Long> {
}