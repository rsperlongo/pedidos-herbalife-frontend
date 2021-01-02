import { Component, OnInit } from '@angular/core';
import { CepService } from '../shared/utils/cep.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isCollapsed = true;

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
  }

  consultaCep() {

  }

}
