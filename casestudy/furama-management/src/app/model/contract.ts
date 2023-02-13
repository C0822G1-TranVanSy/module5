import {Facility} from './facility';
import {Customer} from './customer';

export interface Contract {
  id: number;
  facility: Facility;
  customer: Customer;
  startDate: string;
  endDate: string;
  deposit: string;
}
