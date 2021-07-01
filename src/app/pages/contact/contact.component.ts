import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  form: FormGroup = this.fb.group({
    name: [],
    email: [, [Validators.required, Validators.email]],
    message: [, [Validators.required, Validators.minLength(1)]]
  })

  @ViewChild("status") status!:ElementRef;

  ngOnInit(): void {
  }

  hello(){

  }
  
  sendMail(event:Event){
    event.preventDefault();
    
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    
    const body = {
      email: this.form.controls.email.value,
      message: this.form.controls.message.value
    }
    
    return this.http.post('https://formspree.io/f/xrgrlljd', body, {headers}).subscribe(
      resp => {
        this.form.reset();
        this.activateStatus("Thanks for your submission!", "success");
      },
      err => {
        this.activateStatus("Oops! There was a problem submitting your form", "error");
      }
    ); 
  }
    

  activateStatus(text: string, statusClass:string){
    this.status.nativeElement.innerText = `${text}`;
    this.status.nativeElement.classList.add(`${statusClass}`);
    setTimeout(() => {
      this.status.nativeElement.innerText = ``;
      this.status.nativeElement.classList.remove(`${statusClass}`);
    }, 4000);
  }
  
}
