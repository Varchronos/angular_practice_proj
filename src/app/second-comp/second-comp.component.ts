import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
btnstatus = false;
btnclicks: string[]= [];
onclick(){
  
  if(this.btnstatus === false)
  this.btnstatus = true
else if(this.btnstatus === true)
  this.btnstatus = false

  this.btnclicks.push('click');
}
  constructor() { }

  ngOnInit(): void {
  }

}
