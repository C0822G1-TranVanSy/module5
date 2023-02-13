import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    customerType: new FormControl(),
    customerName: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  });
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.customerGroup.valid) {
    this.customerService.add(this.customerGroup.value).subscribe(next => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('/customer-list');
    });
    }
  }
}
