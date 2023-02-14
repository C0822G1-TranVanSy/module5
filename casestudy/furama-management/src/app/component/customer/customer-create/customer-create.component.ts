import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
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
    customerName: new FormControl('', [ this.checkTitleCase]),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl('', [Validators.pattern('(0|\\(84\\))(90|91)\\d{7}')]),
    email: new FormControl('', [Validators.pattern('[\\w]+\\@[\\w]+\\.[\\w]+')]),
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

  checkTitleCase(c: AbstractControl) {
    const name = c.value;
    const arr = name.split(' ');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length ; i++) {
      const character = arr[i].charAt(0);
      if (character < 'A' || character > 'Z') {
        return {invalidTitle: true};
      }
    }
    return null;
  }

  submit() {
    console.log(this.customerGroup.value);
    if (this.customerGroup.valid) {
      console.log('a');
      this.customerService.add(this.customerGroup.value).subscribe(next => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('/customer-list');
    });
    }
  }
}
