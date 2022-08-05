import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { UserUpdateViewModel } from 'src/app/Models/userupdateViewModel';
import { AccountService } from 'src/app/service/Account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: string="";
  userdetails: any;
  // userdetails: UserUpdateViewModel = new  UserUpdateViewModel();
  constructor(private accountservice: AccountService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id")??""
    this.accountservice.getinfo(this.id).subscribe
      (res => {
        console.log(res)
        this.userdetails = res.data;
      })

  }
}
