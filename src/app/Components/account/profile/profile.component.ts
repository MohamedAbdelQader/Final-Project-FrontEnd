import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIViewModel } from '../../../Models/APIViewModel';
import { EditUserProfile } from '../../../Models/EditUserProfile';
import { MarketerService } from '../../../service/marketer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tasks:EditUserProfile=new EditUserProfile;
  
  constructor( private profService:MarketerService) { }

  ngOnInit(): void {


    // var id = localStorage.getItem('ID')
    this.profService.getProfileData().subscribe(res=>{this.tasks=res.data
    console.log(res)
    
    
    } );
    


}
}
