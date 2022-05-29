import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
