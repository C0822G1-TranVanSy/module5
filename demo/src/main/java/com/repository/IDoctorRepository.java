package com.repository;

import com.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDoctorRepository extends JpaRepository<Doctor, Integer> {
    @Query(value = "select * from `doctor`",nativeQuery = true)
    List<Doctor> getAll();
}
