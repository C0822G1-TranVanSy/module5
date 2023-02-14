import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customer-type';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

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
  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      // tslint:disable-next-line:radix no-shadowed-variable
      customerService.findById(parseInt(id)).subscribe(next => {
        this.customer = next;
        this.customerGroup.patchValue(this.customer);
      });
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
    if (this.customerGroup.valid) {
      this.customerService.edit(this.customerGroup.value).subscribe(next => {
        alert('Thêm mới thành công');
        this.router.navigateByUrl('/customer-list');
      });
    }
  }

}
