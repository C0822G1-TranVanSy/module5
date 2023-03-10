import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Medical} from '../../model/medical';
import {Doctor} from '../../model/doctor';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicalService} from '../../service/medical.service';
import {DoctorService} from '../../service/doctor.service';

@Component({
  selector: 'app-medical-create',
  templateUrl: './medical-create.component.html',
  styleUrls: ['./medical-create.component.css']
})
export class MedicalCreateComponent implements OnInit {
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
  }

  ngOnInit(): void {
  }

  checkDate(group: FormGroup) {
    const startDate = group.value.startDate;
    const endDate = group.value.endDate;
    return (new Date(startDate) > new Date(endDate)) ? {invalidDate: true} : null;
  }

  add() {
    console.log('he');
    // this.errors = {
    //   patientName: '', code: '', endDate: ''
    // };
    if (this.formGroup.valid) {
      console.log('hehe');
      this.medicalService.add(this.formGroup.value).subscribe(next => {
        alert('Th??m m???i Th??nh c??ng');
        if (confirm('B???n c?? mu???n quay v??? trang List')) {
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
    if (confirm('B???n c?? mu???n quay v??? trang danh s??ch ?')) {
      this.router.navigateByUrl('/medical-list');
    }
  }
}
