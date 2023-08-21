import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HQInfoCardComponent } from './components/hq-info-card/hq-info-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SharedModule,
    HQInfoCardComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactPageModule { }
