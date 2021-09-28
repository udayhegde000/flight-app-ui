import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  text: string;
  
  color:string;

  constructor() {
    this.text = "";
    this.color="red";
   }

   setText(text:string):any {
    this.text = text;
   }

   setColor(color:string):any {
    this.color = color;
   }

  ngOnInit(): void {
  }

}
