import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from './material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CatGoogleMapComponent } from './components/cat-google-map/cat-google-map.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopBarComponent,
    CatGoogleMapComponent
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
    MaterialModule,
    CatGoogleMapComponent
  ] 
})
export class SharedModule { }
