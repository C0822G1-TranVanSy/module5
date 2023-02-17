import { Component, OnInit } from '@angular/core';
import {Medical} from '../../model/medical';
import {MedicalService} from '../../service/medical.service';

@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.component.html',
  styleUrls: ['./medical-list.component.css']
})
export class MedicalListComponent implements OnInit {
  medicalList: Medical[];
  medical: Medical;
  patientName: string;
  constructor(private medicalService: MedicalService) { }

  ngOnInit(): void {
    this.getAllMedical();
  }

  getAllMedical() {
    this.medicalService.getAll().subscribe(next => {
      this.medicalList = next;
    });
  }

  delete(id: number) {
    console.log(id);
    this.medicalService.delete(id).subscribe(next => {
      alert('Xóa Thành công');
      this.getAllMedical();
    });
  }

  getItem(item: any) {
    this.medical = item;
    this.patientName = item.patientName;
  }
}
