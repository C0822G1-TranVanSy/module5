import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  productForm: FormGroup;

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.categoryService.getAll().subscribe(next => {
      this.categories = next;
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
    });
  }

  submit() {
    if (this.productForm.valid) {
      this.productService.saveProduct(this.productForm.value).subscribe(next => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('/product/list');
    });
  }
  }
}
