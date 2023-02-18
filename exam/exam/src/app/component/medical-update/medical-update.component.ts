import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Medical} from '../../model/medical';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicalService} from '../../service/medical.service';
import {DoctorService} from '../../service/doctor.service';
import {Doctor} from '../../model/doctor';

@Component({
  selector: 'app-medical-update',
  templateUrl: './medical-update.component.html',
  styleUrls: ['./medical-update.component.css']
})
export class MedicalUpdateComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required]),
    patientName: new FormControl('', [Validators.pattern('[a-z A-Z]+')]),
    startDate: new FormControl('', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
    endDate: new FormControl('', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
    reason: new FormControl('', [Validators.required]),
    therapeuticMethod: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
  }, [this.checkDate]);
  medical: Medical;
  doctorList: Doctor[];
  errors = {
    patientName: '', code: '', endDate: ''
  };


  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private medicalService: MedicalService, private doctorService: DoctorService) {
    this.doctorService.getAll().subscribe(next => {
      this.doctorList = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      console.log(id);
      // tslint:disable-next-line:radix no-shadowed-variable
      this.medicalService.findById(parseInt(id)).subscribe(next => {
        this.medical = next;
        this.formGroup.patchValue(this.medical);
      });
    });
  }

  ngOnInit(): void {
  }

  checkDate(group: FormGroup) {
    const startDate = group.value.startDate;
    const endDate = group.value.endDate;
    return (new Date(startDate) > new Date(endDate)) ? {invalidDate: true} : null;
  }

  update() {
    console.log('he');
    this.errors = {
      patientName: '', code: '', endDate: ''
    };
    if (this.formGroup.valid) {
      console.log('hehe');
      this.medicalService.update(this.formGroup.value).subscribe(next => {
        alert('Chỉnh sửa Thành công');
        if (confirm('Bạn có muốn quay về trang List')) {
          this.router.navigateByUrl('medical-list');
        }
      }, error => {
        console.log(error);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < error.error.length ; i++) {
          if (error.error && error.error[i].field === 'patientName') {
            this.errors.patientName = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === 'code') {
            this.errors.code = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === 'endDate') {
            this.errors.endDate = error.error[i].defaultMessage;
          }
        }
      });
    }
  }

  compareFn(item1: any, item2: any) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  backToList() {
    if (confirm('Bạn có muốn quay về trang danh sách ?')) {
      this.router.navigateByUrl('/medical-list');
    }
  }
}
