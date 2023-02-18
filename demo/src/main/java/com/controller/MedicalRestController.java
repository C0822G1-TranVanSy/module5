package com.controller;

import com.model.Doctor;
import com.model.MedicalRecord;
import com.model.MedicalRecordDto;
import com.service.impl.IDoctorService;
import com.service.impl.IMedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
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
    public ResponseEntity<List<MedicalRecord>> findAllMedical() {
        List<MedicalRecord> medicalRecordList = medicalService.getAll();
        return new ResponseEntity<>(medicalRecordList, HttpStatus.OK);
    }

    @GetMapping("/medicals/page")
    public ResponseEntity<Page<MedicalRecord>> findPageAll(@PageableDefault(size = 2) Pageable pageable) {
        Page<MedicalRecord> medicalRecordPage = medicalService.getPageAll(pageable);
        return new ResponseEntity<>(medicalRecordPage, HttpStatus.OK);
    }

    @GetMapping("/medicals/search/{name}")
    public ResponseEntity<List<MedicalRecord>> searchByName(@PathVariable String name) {
        List<MedicalRecord> medicalRecordList = medicalService.searchByName(name);
        return new ResponseEntity<>(medicalRecordList, HttpStatus.OK);
    }

    @GetMapping("/medicals/{id}")
    public ResponseEntity<MedicalRecord> findById(@PathVariable int id) {
        MedicalRecord medicalRecord = medicalService.findById(id);
        return new ResponseEntity<>(medicalRecord, HttpStatus.OK);
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> findAllDoctor() {
        List<Doctor> doctorList = doctorService.getAll();
        return new ResponseEntity<>(doctorList, HttpStatus.OK);
    }

    @DeleteMapping("/medicals/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id) {
        medicalService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/medicals")
    public ResponseEntity<?> updateById(@Validated @RequestBody MedicalRecord medicalRecord) {
        medicalService.update(medicalRecord.getCode(), medicalRecord.getPatientName(), medicalRecord.getStartDate(), medicalRecord.getEndDate(), medicalRecord.getReason(), medicalRecord.getTherapeuticMethod(), medicalRecord.getDoctor().getId(), medicalRecord.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/medicals/update")
    public ResponseEntity<?> updateDto(@Validated @RequestBody MedicalRecordDto medicalRecordDto, BindingResult bindingResult) {
        medicalRecordDto.validate(medicalRecordDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        medicalService.update(medicalRecordDto.getCode(), medicalRecordDto.getPatientName(), medicalRecordDto.getStartDate(),
                medicalRecordDto.getEndDate(), medicalRecordDto.getReason(), medicalRecordDto.getTherapeuticMethod(), medicalRecordDto.getDoctor().getId(), medicalRecordDto.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/medicals")
    public ResponseEntity<?> addMedical(@RequestBody MedicalRecord medicalRecord) {
        medicalService.addMedical(medicalRecord.getCode(), medicalRecord.getPatientName(), medicalRecord.getStartDate(),
                medicalRecord.getEndDate(), medicalRecord.getReason(), medicalRecord.getTherapeuticMethod(), medicalRecord.getDoctor().getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/medicals/create")
    public ResponseEntity<?> addMedicalDto(@Validated @RequestBody MedicalRecordDto medicalRecordDto, BindingResult bindingResult) {
        medicalRecordDto.validate(medicalRecordDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        medicalService.addMedical(medicalRecordDto.getCode(), medicalRecordDto.getPatientName(), medicalRecordDto.getStartDate(),
                medicalRecordDto.getEndDate(), medicalRecordDto.getReason(), medicalRecordDto.getTherapeuticMethod(), medicalRecordDto.getDoctor().getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
