import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  subID: any = 0;
  volID: any = 0;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(val => {
      if (this.route.snapshot.paramMap.get('sub') != null) {
        this.subID = this.route.snapshot.paramMap.get('sub');
      }
      if (this.route.snapshot.paramMap.get('vol') != null) {
        this.volID = this.route.snapshot.paramMap.get('vol');
      }
      console.log(this.route.snapshot.paramMap.get('sub'));
    });
  }

  ngOnInit() {}
}
