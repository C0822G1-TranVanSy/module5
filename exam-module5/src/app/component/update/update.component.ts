import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {BenhAn} from '../../model/benh-an';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhNhan} from '../../model/benh-nhan';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    benhAn: new FormControl('', [Validators.required]),
    maBenhNhan: new FormControl('', [Validators.required]),
    tenBenhNhan: new FormControl('', [Validators.pattern('[a-z A-Z]+')]),
    ngayNhapVien: new FormControl('', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
    ngayRaVien: new FormControl('', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
    lyDo: new FormControl('', [Validators.required]),
    phuongPhap: new FormControl('', [Validators.required]),
    bacSi: new FormControl('', [Validators.required]),
  }, [this.checkDate]);
  benhAnList: BenhAn[];
  benhNhan: BenhNhan;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private benhAnService: BenhAnService, private benhNhanService: BenhNhanService) {
      this.benhAnService.getAll().subscribe(next => {
        this.benhAnList = next;
      });
      this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get('id');
        // tslint:disable-next-line:radix no-shadowed-variable
        this.benhNhanService.findById(parseInt(id)).subscribe(next => {
          this.benhNhan = next;
          this.formGroup.patchValue(this.benhNhan);
        });
      });
  }

  ngOnInit(): void {
  }

  checkDate(group: FormGroup) {
    const ngayRa = group.value.ngayRaVien;
    const ngayNhap = group.value.ngayNhapVien;
    return (new Date(ngayNhap) > new Date(ngayRa)) ? {invalidDate: true} : null;
  }

  update() {
    if (this.formGroup.valid) {
      this.benhNhanService.edit(this.formGroup.value).subscribe(next => {
        alert('Chỉnh sửa Thành công');
        if (confirm('Bạn có muốn quay về trang List')) {
            this.router.navigateByUrl('list');
        }
      });
    }
  }

  compareFn(item1: any, item2: any) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  backToList() {
    if (confirm('Bạn có muốn quay về trang danh sách ?')) {
      this.router.navigateByUrl('list');
    }
  }
}
