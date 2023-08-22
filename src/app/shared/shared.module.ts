import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from './material/material/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    TopBarComponent,
    MaterialModule
  ] 
})
export class SharedModule { }
