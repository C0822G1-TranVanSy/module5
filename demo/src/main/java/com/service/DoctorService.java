package com.service;

import com.model.Doctor;
import com.repository.IDoctorRepository;
import com.service.impl.IDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DoctorService implements IDoctorService {
    @Autowired
    private IDoctorRepository doctorRepository;
    @Override
    public List<Doctor> getAll() {
        return doctorRepository.getAll();
    }
}
