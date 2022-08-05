import { Component, OnInit } from '@angular/core';
import { SideNavTogglerService } from '../sideNavToggler.service';

@Component({
  selector: 'app-side-nav-toggler',
  templateUrl: './side-nav-toggler.component.html',
  styleUrls: ['./side-nav-toggler.component.css']
})
export class SideNavTogglerComponent implements OnInit {

  constructor(private SideNavTogglerService:SideNavTogglerService) { }

  ngOnInit(): void {
  }
  handle(){
    this.SideNavTogglerService.toggleSideNav()
  }

}
