import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  @Input() value :number=0;
  @Output() RateChange= new EventEmitter<number>()
  constructor() { }
  ngOnInit(): void {
  }
  change(rate:number){
    console.log('rate',rate)
    this.RateChange.emit(rate);
  }
}
