import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  id: string;
  name: string;
  title: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.title = this.route.snapshot.queryParamMap.get('title');
   }

  ngOnInit() {
  }

}
