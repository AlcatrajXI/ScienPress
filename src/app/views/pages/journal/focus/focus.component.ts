import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  subID: any = 0;
  volID: any = 0;
  issueID: any = 0;
  articleForm: any;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private router: Router
  ) {
    route.params.subscribe(val => {
      if (this.route.snapshot.paramMap.get('sub') != null) {
        this.subID = this.route.snapshot.paramMap.get('sub');
      }
      if (this.route.snapshot.paramMap.get('vol') != null) {
        this.volID = this.route.snapshot.paramMap.get('vol');
      }
      if (this.route.snapshot.paramMap.get('issue') != null) {
        this.issueID = this.route.snapshot.paramMap.get('issue');
      }
    });
  }

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      coAuthors: [''],
      organisation: [''],
      department: [''],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: [''],
      fax: [''],
      email: ['', Validators.required],
      paperTitle: ['', Validators.required],
      abstract: ['', Validators.required],
      attach: ['', Validators.required]
    });
  }
  onFileChange(event) {
    const that = this;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        that.articleForm.controls.attach.setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result
        });
      };
    }
    console.log(that.articleForm.value.attach);
  }
  submit() {
    const that = this;
    that.http
      .post('https://blogs.thecodefusion.com/api/article.php', that.articleForm.value)
      .subscribe(
        (data: any) => {
          if (data.status === true) {
            console.log(data);
            that.router.navigate(['/thanks'], {
              queryParams: {
                id: data.id,
                name:
                  that.articleForm.value.firstName +
                  ' ' +
                  that.articleForm.value.lastName,
                title: that.articleForm.value.paperTitle
              }
            });
          }
        },
        err => {}
      );
  }
}
