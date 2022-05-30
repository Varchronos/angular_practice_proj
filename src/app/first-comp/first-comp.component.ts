import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
username = '';
userfield = false;
output = '';
  constructor() {
    
   }
   getuser(){
    if(this.username !== ''){
      this.userfield = true;
  }
  else 
  this.userfield = false;
}

setusertext(){
this.output = this.username;
  if(this.username !=='')
  { 
    this.userfield = false
    this.username ='';
  }
  
}
  ngOnInit(): void {
  }

}
