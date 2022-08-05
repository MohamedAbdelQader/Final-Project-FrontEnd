import { Component, OnInit } from '@angular/core';
import { EditUserProfile } from 'src/app/Models/EditUserProfile';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketerService } from 'src/app/service/marketer.service';
import { AccountService } from 'src/app/service/Account.service';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  
 
  constructor(private profService:MarketerService,private accountservice:AccountService, private auth:AuthService,private router :Router) { }

  ngOnInit(): void {
    
this.profService.getProfileData().subscribe(res=>this.profService=res.data)
  }
logout(){
  this.accountservice.logout().subscribe(res => {
    console.log(res)

    localStorage.removeItem('Token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem("id");
    this.auth.setLooggedStatus(false)
    this.router.navigateByUrl('/login')
  });
}
}
