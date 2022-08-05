import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/Account.service';
import {UserUpdateViewModel}from 'src/app/Models/userupdateViewModel';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  id:any;
  userdetails :any;
  public updateform : FormGroup = new FormGroup([]);

  constructor(private Formbuilder :FormBuilder ,private accountservice :AccountService ,private router:Router) { }
  oldData: any;

  ngOnInit(): void {
    this.id = localStorage.getItem("id")??""
    this.accountservice.getinfo(this.id).subscribe
      (res => {
        console.log(res)
        this.oldData = res.data;
        this.Build()
      })
  }
  Build(){
    this.updateform = this.Formbuilder.group(
     {
      id: [
        this.oldData.id || '',[Validators.required,],
      ],
      nameAr: [ this.oldData.nameAr || '',[Validators.required] ],
      nameEn: [this.oldData.nameEn || '',[Validators.required]],
      email: [this.oldData.email || '', [Validators.required, Validators.email]],
      password: [this.oldData.password || '', [Validators.required]],
      country: [this.oldData.country || '', [Validators.required]],
      city: [this.oldData.city || '', [Validators.required,]],
      street: [this.oldData.street || '', [Validators.required, ]],
      phone: [this.oldData.phones || '', [Validators.required, ]],
    
    });
  }
  

  edit(){
    let value = new UserUpdateViewModel();
    value.ID= localStorage.getItem("id")??"";
    value.NameAr = this.updateform.value["nameAr"]
    value.NameEn = this.updateform.value["nameEn"]
    value.Email = this.updateform.value["email"]
    value.Password = this.updateform.value["password"]
    value.Country = this.updateform.value["country"]
    value.City = this.updateform.value["city"]   
    value.Street = this.updateform.value["street"]
    value.Phones.push(this.updateform.value["phone"]);
    value.Role = "User";
    value.Img = ""
  

    this.accountservice.edit(value)
    .subscribe(res=>{
      console.log(res)
      if(res.success == true){
              alert("Update success");
              this.router.navigateByUrl('/user/profile');
      }
      else{
        alert("Try Again!!!")
      }
        

  },
  err=>console.log(err)
  )
  }
  }
