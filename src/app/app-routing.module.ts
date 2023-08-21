import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';

const routes: Routes = [
  {path: '', component: ContactPageComponent} //@TODO: visit and set proper final path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
