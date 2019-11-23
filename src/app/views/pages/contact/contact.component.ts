import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: any;
  captchaSolve = false;
 // data-sitekey="6Lc3-VkUAAAAANJUnwadcwPMlfheKM2jkI54QuN_";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: [''],
      company: [''],
      companyURL: [''],
      message: ['', Validators.required]
    });
  }
  resolved(captchaResponse: any) {
    this.captchaSolve = true;
    // console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
