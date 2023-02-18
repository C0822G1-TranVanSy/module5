package com.service.impl;

import com.model.MedicalRecord;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IMedicalService {
    List<MedicalRecord> getAll();

    Page<MedicalRecord> getPageAll(Pageable pageable);

    List<MedicalRecord> searchByName(String name);

    MedicalRecord findById(int id);

    void deleteById(int id);

    void update(String code, String patientName, String startDate, String endDate, String reason, String therapeuticMethod, int doctorId, int id);

    void addMedical(String code, String patientName, String startDate, String endDate, String reason, String therapeuticMethod, int doctorId);
}
