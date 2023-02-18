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
  data: any[];
  number: number;
  totalPages: number;
  pageNumbers: number[];
  first: boolean;
  last: boolean;
  constructor(private medicalService: MedicalService) { }

  ngOnInit(): void {
    this.getAllPage(this.number);
  }

  getAllMedical() {
    this.medicalService.getAll().subscribe(next => {
      this.medicalList = next;
    });
  }

  getAllPage(page: number) {
    this.medicalService.getAllPage(page).subscribe(next => {
      console.log(next);
      this.medicalList = next.content;
      this.number = next.number;
      this.totalPages = next.totalPages;
      this.first = next.first;
      this.last = next.last;
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

  searchByName(value: string) {
    if (value === '') {
      this.medicalService.getAll().subscribe(next => {
        this.medicalList = next;
        return;
      });
    }
    this.medicalService.search(value).subscribe(next => {
      this.medicalList = next;
      console.log(next);
    });
  }

  // changePage(number: number) {
  // }
}
