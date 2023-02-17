import { Component, OnInit } from '@angular/core';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {BenhAn} from '../../model/benh-an';
import {BenhNhan} from '../../model/benh-nhan';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benhNhanList: BenhNhan[];
  benhNhan: BenhNhan;
  maBenhAn: string;
  constructor(private router: Router, private benhAnService: BenhAnService, private benhNhanService: BenhNhanService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.benhNhanService.getAll().subscribe(next => {
      this.benhNhanList = next;
    });
  }

  getItem(item: BenhNhan) {
    this.benhNhan = item;
    this.maBenhAn = item.benhAn.maBenhAn;
  }

  delete(id: number) {
    this.benhNhanService.delete(id).subscribe(next => {
      alert('Xóa thành công');
      this.getAll();
    });
  }
}
