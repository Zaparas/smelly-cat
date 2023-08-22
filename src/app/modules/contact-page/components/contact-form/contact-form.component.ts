import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  guestFullName: FormControl = new FormControl('');
  guestEmail: FormControl = new FormControl('');
  guestCity: FormControl = new FormControl('');
  guestPostalCode: FormControl = new FormControl('');
  guestAddress: FormControl = new FormControl('');
  guestMessage: FormControl = new FormControl('');

  
  onSubmit(){
    // Handle Send!
  }
}
