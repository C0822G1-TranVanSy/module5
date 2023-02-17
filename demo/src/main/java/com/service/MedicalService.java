package com.service;

import com.model.MedicalRecord;
import com.repository.MedicalRepository;
import com.service.impl.IMedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalService implements IMedicalService {
    @Autowired
    private MedicalRepository medicalRepository;

    @Override
    public List<MedicalRecord> getAll() {
        return medicalRepository.getAll();
    }

    @Override
    public MedicalRecord findById(int id) {
        return medicalRepository.findById(id);
    }

    @Override
    public void deleteById(int id) {
        medicalRepository.deleteById(id);
    }

    @Override
    public void update(String code, String patientName, String startDate, String endDate, String reason, String therapeuticMethod, int doctorId, int id) {
        medicalRepository.update(code,patientName,startDate,endDate,reason,therapeuticMethod,doctorId,id);
    }
}
