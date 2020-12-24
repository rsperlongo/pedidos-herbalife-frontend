import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  products: Products[];

  constructor(private modalService: BsModalService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getProducts(): void {
    this.productsService.getProduct().subscribe(products => this.products = products);
  }

}
