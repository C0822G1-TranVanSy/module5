import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  formProduct: FormGroup;
  productList: Product[] = [];
  categoryList: Category[] = [];
  selectedOption = true;
  product: Product;

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      gender: new FormControl(),
      dateGroup: new FormGroup({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required])
      }, [this.checkDate]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('09\\d{8}')]),
      category: new FormControl('', [Validators.required])
    });
    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    });
  }

  checkDate(control: AbstractControl) {
      const date = control.value;
      return (new Date(date.startDate) >= new Date(date.endDate)) ? {endBeforeStart: true} : null;
  }

  addProduct() {
    if (this.formProduct.valid) {
      this.product = this.formProduct.value;
      this.product.startDate = this.formProduct.get('dateGroup').value.startDate;
      this.product.endDate = this.formProduct.get('dateGroup').value.endDate;
      console.log(this.product);
      this.productService.addProduct(this.product).subscribe(next => {
        alert('Thêm mới thành công');
        this.router.navigateByUrl('/product');
      });
    }
  }
}
