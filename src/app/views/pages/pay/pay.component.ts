import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  payForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      journal: ['', Validators.required],
      trackingNo: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

}
