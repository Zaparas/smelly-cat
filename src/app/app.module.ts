import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';
import { ContactFormComponent } from './modules/contact-page/components/contact-form/contact-form.component';
import { HQInfoCardComponent } from './modules/contact-page/components/hq-info-card/hq-info-card.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    TopBarComponent,
    FooterComponent,
    HQInfoCardComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
