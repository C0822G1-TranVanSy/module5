import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  product: Product;
  productName: string;

  constructor(private productService: ProductService) {
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
}
