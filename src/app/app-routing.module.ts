import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockingSandboxComponent } from './docking-sandbox/docking-sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: DockingSandboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
