import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  customerType: CustomerType;
  customerName: string;
  dateOfBirth: string;
  gender: boolean;
  idCard: string;
  phoneNumber: string;
  email: string;
  address: string;
}
