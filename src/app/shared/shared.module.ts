import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from './material/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    FormsModule,
    TopBarComponent,
    MaterialModule
  ] 
})
export class SharedModule { }
