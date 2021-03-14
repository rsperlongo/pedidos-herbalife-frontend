import { Component, OnInit } from '@angular/core';
import { Flavours } from '../models/flavours';
import { FlavoursService } from '../services/flavours.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  flavours: Flavours[];

  flavoursmock = [
    'chocolate', 'morango', 'baunilha'
  ]

  constructor(private flavoursService: FlavoursService) { }

  ngOnInit(): void {
    this.getFlavours();
  }

  getFlavours() {
    this.flavoursService.getFlavour().subscribe(flavours => this.flavours = flavours)
  }

}
