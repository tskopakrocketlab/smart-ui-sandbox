import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DockingSandboxComponent } from './docking-sandbox/docking-sandbox.component';
import { DockingLayoutModule } from '@smart-webcomponents-angular/dockinglayout';
import { SplitterModule } from '@smart-webcomponents-angular/splitter';
import { TabsModule } from '@smart-webcomponents-angular/tabs';

@NgModule({
  declarations: [
    AppComponent,
    DockingSandboxComponent
  ],
  imports: [
    BrowserModule,
    DockingLayoutModule,
    SplitterModule,
    TabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
