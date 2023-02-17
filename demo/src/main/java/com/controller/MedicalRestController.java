package com.controller;

import com.model.Doctor;
import com.model.MedicalRecord;
import com.service.impl.IDoctorService;
import com.service.impl.IMedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class MedicalRestController {
    @Autowired
    private IMedicalService medicalService;
    @Autowired
    private IDoctorService doctorService;

    @GetMapping("/medicals")
    public ResponseEntity<List<MedicalRecord>> findAllMedical(){
        List<MedicalRecord> medicalRecordList = medicalService.getAll();
        return new ResponseEntity<>(medicalRecordList, HttpStatus.OK);
    }

    @GetMapping("/medicals/{id}")
    public ResponseEntity<MedicalRecord> findById(@PathVariable int id){
        MedicalRecord medicalRecord = medicalService.findById(id);
        return new ResponseEntity<>(medicalRecord, HttpStatus.OK);
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> findAllDoctor(){
        List<Doctor> doctorList = doctorService.getAll();
        return new ResponseEntity<>(doctorList, HttpStatus.OK);
    }

    @DeleteMapping("/medicals/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id){
        medicalService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/medicals")
    public ResponseEntity<?> updateById(@RequestBody MedicalRecord medicalRecord) {
        medicalService.update(medicalRecord.getCode(),medicalRecord.getPatientName(),medicalRecord.getStartDate(),medicalRecord.getEndDate(),medicalRecord.getReason(),medicalRecord.getTherapeuticMethod(),medicalRecord.getDoctor().getId(),medicalRecord.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/medicals")
    public ResponseEntity<?> addMedical(@RequestBody MedicalRecord medicalRecord) {
        medicalService.addMedical(medicalRecord.getCode(),medicalRecord.getPatientName(),medicalRecord.getStartDate(),medicalRecord.getEndDate(),medicalRecord.getReason(),medicalRecord.getTherapeuticMethod(),medicalRecord.getDoctor().getId(),medicalRecord.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
