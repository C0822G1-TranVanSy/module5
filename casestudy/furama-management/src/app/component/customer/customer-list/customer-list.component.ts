import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[];
  customer: Customer;
  customerName: string;
  customerTypeId = 0;
  emailSearch = '';
  nameSearch = '';
  page: string | number;
  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
  this.customerService.getAll().subscribe(next => {
     console.log(next);
     this.customerList = next;
   });
  }

  getCustomer(item: Customer) {
    this.customer = item;
    this.customerName = item.customerName;
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(next => {
      alert('Xóa thành công');
      this.getAll();
    });
  }

  search() {
    console.log(this.customerTypeId);
    if (this.customerTypeId) {
      console.log('a');
      this.customerService.searchAll(this.nameSearch, this.emailSearch, this.customerTypeId).subscribe(next => {
        this.customerList = next;
      });
    } else {
      this.customerService.searchByNameAndEmail(this.nameSearch, this.emailSearch).subscribe(next => {
        this.customerList = next;
      });
    }
  }
}
