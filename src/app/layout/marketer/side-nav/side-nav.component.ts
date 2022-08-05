import { Component } from '@angular/core';
import { SideNavTogglerService } from '../sideNavToggler.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isHidden:boolean = false
  constructor(private Service:SideNavTogglerService) { }

  ngOnInit(): void {
    this.isHidden= this.Service.hideSideNav;
  }

}
