import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  idPro: number;
  namePro: string;

  constructor(private productService: ProductService, private categoryService: CategoryService) {
    // this.categoryService.getAll().subscribe(next => {
    //   console.log(next);
    //   this.categories = next;
    // });
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(next => {
      console.log(next);
      this.categories = next;
    });
  }

  getAll() {
    this.productService.getAll().subscribe(next => {
      console.log(next);
      this.products = next;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(next => {
      alert('xóa thành công');
      this.ngOnInit();
    });
  }

  getIdAndName(id: number, name: string) {
    this.idPro = id;
    this.namePro = name;
  }

  searchByName(nameSearch: string) {
    this.productService.searchName(nameSearch).subscribe(next => {
      this.products = next;
    });
  }

  searchByNameAndCategory(nameSearch: string, category: string) {
    this.productService.searchByNameAndCategory(nameSearch, category).subscribe(next => {
      this.products = next;
    });
  }
}
