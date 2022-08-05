import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignupViewModel } from 'src/app/Models/userSignUpViewModel';
import { AccountService } from 'src/app/service/Account.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  public signupform !: FormGroup;
  constructor(private Formbuilder :FormBuilder ,private account :AccountService ,private router:Router) { }

  ngOnInit(): void {
  
    this.signupform =this.Formbuilder.group({
    nameEn: ["", [Validators.required, Validators.minLength(3)]],
    nameAr: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
    password: ["", Validators.required],
    confirmpassword: ["", Validators.required],
    country: ["", [Validators.required, Validators.minLength(4)]],
    city: ["", [Validators.required, Validators.minLength(4)]],
    street: ["", [Validators.required, Validators.minLength(4)]],
    phones: ["", [Validators.required]],
    img:[""]
  })
}


signup(){
  let value = new UserSignupViewModel();
    value.nameAr = this.signupform.value["nameAr"]
    value.nameEn = this.signupform.value["nameEn"]
    value.email = this.signupform.value["email"]
    value.password = this.signupform.value["password"]
    value.country = this.signupform.value["country"]
    value.city = this.signupform.value["city"]   
    value.street = this.signupform.value["street"]
    value.phones.push(this.signupform.value["phones"]);
    value.img = this.signupform.value['img']

    this.account.addUser(value)
    .subscribe(res=>{
      console.log(res)
      if(res.success == true){
              // alert("sign up success");
              this.router.navigateByUrl('/login');
      }
      else{
        alert("Try Again!!!")
      }
        

  },
  err=>console.log(err)
  )
}
}
