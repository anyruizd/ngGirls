import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  count = 0;
  imgSource = './../favicon.ico';
  enabled = false;
  constructor() { }

  ngOnInit() {
  }

  countUp(){
    this.count = this.count + 1;
  }
  enableIn(){
    this.enabled = !this.enabled;
  }

}
