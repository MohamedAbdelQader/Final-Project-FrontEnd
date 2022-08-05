import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketer-home',
  templateUrl: './marketer-home.component.html',
  styleUrls: ['./marketer-home.component.css']
})
export class MarketerHomeComponent implements OnInit {

  constructor() { }
name=""
  ngOnInit(): void {
    this.name = localStorage.getItem("username")?.split("@")[0]??""
  }

}
