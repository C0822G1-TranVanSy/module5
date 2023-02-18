package com.model;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MedicalRecordDto implements Validator {
    private int id;
    @Pattern(regexp = "BA-[\\d]+",message = "Bạn phải nhập mã bênh án với định dạng BA-xxx")
    private String code;
    @NotBlank(message = "Ban phai nhap ten benh nhan")
    private String patientName;
    @NotBlank
    private String startDate;
    @NotBlank
    private String endDate;
    @NotBlank
    private String reason;
    @NotBlank
    private String therapeuticMethod;
    private Doctor doctor;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getTherapeuticMethod() {
        return therapeuticMethod;
    }

    public void setTherapeuticMethod(String therapeuticMethod) {
        this.therapeuticMethod = therapeuticMethod;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        MedicalRecordDto medicalRecordDto = (MedicalRecordDto) target;
        if(medicalRecordDto.getStartDate().compareTo(medicalRecordDto.getEndDate())>=1){
            errors.rejectValue("endDate", "endDate", "Ngày kết thúc phải lớn hơn ngày bắt đầu");
        }
    }
}
