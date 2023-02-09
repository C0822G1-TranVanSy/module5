import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idPro: number;
  namePro: string;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  getIdAndName(id: number, name: string) {
    this.idPro = id;
    this.namePro = name;
  }

}
