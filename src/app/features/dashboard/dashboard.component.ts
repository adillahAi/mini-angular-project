import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public name: string;
  public number1: number;
  public number2: number;
  public sum: number;
  public difference: number;
  public showAdillah: boolean;
  public items: string[];

  constructor() {
    this.name = 'Awad';
    this.items = ['yashinee', 'tonton awad', 'pas koner', 'moi'];
   }

  ngOnInit(): void {
  }


  public sumOfTwoNumbers(): void {
    this.sum = this.number1 + this.number2;
    if (this.sum > 10) {
      this.showAdillah = true;
    } else {
      this.showAdillah = false;
    }
  }

  public differenceOfTwoNumbers(): void{
    this.difference = this.number1 - this.number2;
    console.log('difference', this.difference);
  }
}
