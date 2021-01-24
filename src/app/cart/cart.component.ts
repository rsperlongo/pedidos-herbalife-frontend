import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  isCollapsed = true;
  cartForm = this.fb.group({
    cep: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //
  }

}
