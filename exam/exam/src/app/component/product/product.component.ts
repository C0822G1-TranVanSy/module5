import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  categoryList: Category[];
  product: Product;
  productName: string;
  categoryId = 0;

  constructor(private productService: ProductService, private categoryService: CategoryService) {
    categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.productList = next;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(next => {
      alert('Xóa Thành công');
      this.getAll();
    });
  }

  getProduct(item: Product) {
    this.product = item;
    this.productName = item.name;
  }

  searchByNameAndCategoryId(nameSearch: string, categoryId: number) {
    console.log(categoryId);
    console.log(nameSearch);
    if (categoryId) {
      this.productService.searchByNameAndCategoryId(nameSearch, categoryId).subscribe(next => {
        this.productList = next;
      });
    } else {
      this.productService.searchByName(nameSearch).subscribe(next => {
        this.productList = next;
      });
    }
    console.log(this.productList);
  }
}
