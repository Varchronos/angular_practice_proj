import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color: white;
    }
    `]
})

export class ServerComponent{
serverID = 10;
serverStatus = 'OFFLINE';

constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'ONLINE' : 'OFFLINE'
}

getcolor(){
    return this.serverStatus ==='ONLINE' ? 'green': 'red';
}
getServerStatus(){
    return this.serverStatus;
}
}