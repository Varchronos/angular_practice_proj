import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverName = 'TestServer';
serverCreationStatus = 'no server was created';
serverCreate = false;
servers = ['testserver', 'testserver 2'];
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true
    },2000);
   }

   onUpdateServerName(event: any){
     this.serverName = (<HTMLInputElement>event.target).value;

   }
   onCreateServer(){
     this.servers.push(this.serverName);
     this.serverCreate = true;
     this.serverCreationStatus = 'server was created! name is '+ this.serverName;
   }
  ngOnInit() {
  }
  
}
