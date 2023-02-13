import {Category} from './category';

export interface Product {
  id: number;
  name: string;
  gender: boolean;
  startDate: string;
  endDate: string;
  phoneNumber: string;
  category: Category;
}
