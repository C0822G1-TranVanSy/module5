package com.repository;

import com.model.MedicalRecord;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
@Transactional
public interface MedicalRepository extends JpaRepository<MedicalRecord,Integer> {
    @Query(value = "select m.* from `medical_record` m join `doctor` d on m.doctor_id = d.id",nativeQuery = true)
    List<MedicalRecord> getAll();

    @Query(value = "select m.* from `medical_record` m join `doctor` d on m.doctor_id = d.id",nativeQuery = true)
    Page<MedicalRecord> getPageAll(Pageable pageable);

    @Query(value = "select m.* from `medical_record` m where m.patient_name like concat('%',:patientName,'%')",nativeQuery = true)
    List<MedicalRecord> searchByName(@Param("patientName") String patientName);

    @Query(value = "select m.* from `medical_record` m join `doctor` d on m.doctor_id = d.id where m.id = :id",nativeQuery = true)
    MedicalRecord findById(@Param("id") int id);

    @Modifying
    @Query(value = "delete from medical_record where id = :id",nativeQuery = true)
    void deleteById(@Param("id") int id);

    @Modifying
    @Query(value = "update medical_record set code = :code, patient_name = :patientName, start_date = :startDate, end_date = :endDate, reason = :reason, therapeutic_method = :therapeuticMethod, doctor_id = :doctorId where id = :id",nativeQuery = true)
    void update(@Param("code") String code,@Param("patientName") String patientName,@Param("startDate") String startDate,@Param("endDate") String endDate,@Param("reason") String reason,@Param("therapeuticMethod") String therapeuticMethod,@Param("doctorId") int doctorId,@Param("id") int id);

    @Modifying
    @Query(value = "INSERT INTO medical_record (code,patient_name,start_date,end_date,reason, therapeutic_method, doctor_id) VALUES (:code, :patientName, :startDate,:endDate,:reason,:therapeuticMethod,:doctorId); ",nativeQuery = true)
    void add(@Param("code") String code,@Param("patientName") String patientName,@Param("startDate") String startDate,@Param("endDate") String endDate,@Param("reason") String reason,@Param("therapeuticMethod") String therapeuticMethod,@Param("doctorId") int doctorId);
}
