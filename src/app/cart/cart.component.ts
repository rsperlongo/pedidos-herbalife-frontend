import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  isCollapsed = true;

  cartForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
  })


  constructor() { }

  ngOnInit(): void {
    this.getErrorMessage();
  }

  getErrorMessage() {
    if (this.cartForm.hasError('required')) {
      return 'Campo Obrigatório';
    }

    return this.cartForm.hasError('email') ? 'Email não válido' : '';
  }
}
