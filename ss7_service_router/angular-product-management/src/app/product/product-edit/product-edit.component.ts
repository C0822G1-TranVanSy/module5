import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categories: Category[] = [];
  productForm: FormGroup;
  product: Product;

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(next => {
      this.categories = next;
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        category: new FormControl()
      });
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix no-shadowed-variable
       productService.findById(parseInt(id)).subscribe(next => {
         console.log(next);
         this.product = next;
         this.productForm.patchValue(this.product);
       });
      }
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    if (this.productForm.valid) {
      this.productService.editProduct(product.id, product).subscribe(next => {
        alert('Chỉnh sửa thành công');
        this.router.navigateByUrl('/product/list');
      });
    }
  }

  compareFn(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
