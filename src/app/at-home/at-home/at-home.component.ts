import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-at-home',
  templateUrl: './at-home.component.html',
  styleUrls: ['./at-home.component.css']
})
export class AtHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  link1(){
    this.router.navigate([newaction]);
  }
  link2(){
    this.router.navigate([actiontracker]);
  }
}
