package com.service.impl;

import com.model.MedicalRecord;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IMedicalService {
    List<MedicalRecord> getAll();

    Page<MedicalRecord> getPageAll(Pageable pageable);

    Page<MedicalRecord> searchByName(String name, Pageable pageable);

    MedicalRecord findById(int id);

    void deleteById(int id);

    void update(String code, String patientName, String startDate, String endDate, String reason, String therapeuticMethod, int doctorId, int id);

    void addMedical(String code, String patientName, String startDate, String endDate, String reason, String therapeuticMethod, int doctorId);
}
