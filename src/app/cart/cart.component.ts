import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  isCollapsed = true;
  cartForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.cartForm = new FormGroup({
      cep: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      uf: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }
  get cep() { return this.cartForm.get('cep'); }

  get name() { return this.cartForm.get('name'); }

  get address() { return this.cartForm.get('address') }

  get city() { return this.cartForm.get('city'); }

  get uf() { return this.cartForm.get('uf'); }

  get email() { return this.cartForm.get('email'); }

  get phone() { return this.cartForm.get('phone'); }

}
