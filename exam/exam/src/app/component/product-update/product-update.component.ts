import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, AbstractFormGroupDirective, FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  formProduct: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    phoneNumber: new FormControl(),
    category: new FormControl()
  }, [this.endBeforeStart]);
  categoryList: Category[];
  product: Product;
  selectedOption = true;

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix no-shadowed-variable
        this.productService.findById(parseInt(id)).subscribe(next => {
          console.log(next);
          this.product = next;
          this.formProduct.patchValue(this.product);
        });
      }
    });
  }

  ngOnInit(): void {
  }

  endBeforeStart(date: FormGroup) {
    const startDate = new Date(date.value.startDate);
    const endDate = new Date(date.value.endDate);
    return (startDate >= endDate) ? {invalidEndDate: true} : null;
  }

  update() {
    this.product = this.formProduct.value;
    if (this.formProduct.valid) {
    this.productService.update(this.product).subscribe(next => {
      alert('Chỉnh sửa thành công');
      this.router.navigateByUrl('/product');
    });
    }
  }

  compareFn(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
