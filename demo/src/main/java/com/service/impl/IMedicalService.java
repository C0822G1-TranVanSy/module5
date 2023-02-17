package com.service.impl;

import com.model.MedicalRecord;

import java.util.List;

public interface IMedicalService {
    List<MedicalRecord> getAll();

    MedicalRecord findById(int id);

    void deleteById(int id);

    void update(String code, String patientName, String startDate, String endDate, String reason, String therapeuticMethod, int doctorId, int id);

    void addMedical(String code, String patientName, String startDate, String endDate, String reason, String therapeuticMethod, int doctorId);
}
