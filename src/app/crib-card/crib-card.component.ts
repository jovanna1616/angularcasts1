import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  // this is binded property which will get value crib in parent's html;
  // so it will be possible(in parent's html) to tell to this property that it's value
  // will be crib from let crib
  @Input() crib: Crib;

  constructor() { }

  ngOnInit() {
  }

}
