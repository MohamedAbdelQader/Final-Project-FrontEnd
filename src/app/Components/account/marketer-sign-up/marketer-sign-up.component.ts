import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserMarketerSignupViewModel } from '../../../Models/UserMarketerViewModel';
import { AccountService } from '../../../service/Account.service';

@Component({
  selector: 'app-marketer-sign-up',
  templateUrl: './marketer-sign-up.component.html',
  styleUrls: ['./marketer-sign-up.component.css']
})
export class MarketerSignUpComponent implements OnInit {

  constructor(private builder:FormBuilder,private Account:AccountService,private router:Router) { }
  form:FormGroup=new FormGroup([]);
 
  ngOnInit(): void {
    this.form=this.builder.group({
      NameEn:['',[Validators.required]],
      NameAr:['',[Validators.required]],
      email:['',[Validators.required],Validators.email],
      password:['',[Validators.required]],
      Country:['',[Validators.required]],
      City:['',[Validators.required]],
      Street:['',[Validators.required]],
      Phones:['',[Validators.required],Validators.maxLength(11)],
      taxCard:['',[Validators.required]],
      Img:['',[Validators.required]]
    });
  }


  register(){
    let SignUp = new UserMarketerSignupViewModel();
    SignUp.nameEn=this.form.value["NameEn"];
    SignUp.nameAr=this.form.value["NameAr"];
    SignUp.email=this.form.value["email"];
    SignUp.password=this.form.value["password"];
    SignUp.country=this.form.value["Country"];
    SignUp.city=this.form.value["City"];
    SignUp.street=this.form.value["Street"];
    SignUp.phones.push(this.form.value["Phones"]);
    SignUp.taxCard=this.form.value["taxCard"];
    SignUp.Img=this.form.value["Img"];
    console.log(SignUp);

    this.Account.addMarketer(SignUp).subscribe(res=>{
      console.log(res)
      if (res.success){
        console.log(res)
        this.router.navigateByUrl('/login')
      }
      else{
        console.log(res)
        alert("Try again please")
        
      }
    })
  }
}
