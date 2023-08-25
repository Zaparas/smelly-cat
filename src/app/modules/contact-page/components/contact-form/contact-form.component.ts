import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    guestFullName: new FormControl(''),
    guestEmail: new FormControl(''),
    guestCity: new FormControl(''),
    guestPostalCode: new FormControl(''),
    guestAddress: new FormControl(''),
    guestMessage: new FormControl('')
  });
  
  onSubmit(){
    console.log(this.contactForm.value);
  }
}
