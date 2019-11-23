import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  payForm: any;
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      journal: ['No Title', Validators.required],
      trackingNo: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      email: ['', Validators.required],
      amount: [10, Validators.required],
      payDetails: ['']
    });
    this.initConfig();
  }
  initConfig(): void {
    const that = this;
    that.payPalConfig = {
      currency: 'USD',
      clientId: 'AX1FRP1tobzX6otbnFi8ReXr4g_JlcplUf2oXLxFiQAGSU8yEoPZJsEZCJ_N9Vvmm2Fr8L6ReH7IKN5y',
      createOrderOnClient: data =>
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        <ICreateOrderRequest> {
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: that.payForm.value.amount,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: that.payForm.value.amount
                  }
                }
              },
              items: [
                {
                  name: that.payForm.value.journal,
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: that.payForm.value.amount
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then(details => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
          that.payForm.controls.payDetails.setValue(details);
          that.submit();
        });
      },
      onClientAuthorization: data => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }
  submit() {
    const that = this;
    that.http
    .post(
      'https://blogs.thecodefusion.com/api/pay.php',
      that.payForm.value)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
        }
      );
  }
}
