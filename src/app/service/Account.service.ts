import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResultViewModel } from '../Models/Acount';
import { LoginViewModel } from '../Models/LoginViewModel';
import { APIViewModel } from '../Models/APIViewModel';
import { UserSignupViewModel } from '../Models/userSignUpViewModel';
import { UserUpdateViewModel } from '../Models/userupdateViewModel';
import { UserMarketerSignupViewModel } from '../Models/UserMarketerViewModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  userid: string = "";

  constructor(private http: HttpClient) { }


  login(LogIn: LoginViewModel) {

    return this.http.post<LoginResultViewModel>("https://localhost:63000/User/SignIn", LogIn)

  }

  logout() {
    let token = localStorage.getItem('Token');
    return this.http.get<APIViewModel>(`https://localhost:63000/User/SignOut`,);
  }
  IsLoggedIn(): boolean {
    let token = localStorage.getItem('token')
    if (token != null) {
      return true;
    }
    return false;
  }
  ////////////////////////////
  addMarketer(Register: UserMarketerSignupViewModel) {
    console.log(Register)
    return this.http.post<APIViewModel>("https://localhost:63000/Marketer/Register", Register);

  }

  addUser(RegisterView: UserSignupViewModel) {
    return this.http.post<APIViewModel>("https://localhost:63000/User/Register", RegisterView)
  }
  getinfo(userid: any) {
    return this.http.get<any>("https://localhost:63000/User/UpdateProfile?ID=" + userid)

  }
  edit(userupdateViewModel: UserUpdateViewModel) {
    return this.http.post<APIViewModel>("https://localhost:63000/User/Profile", userupdateViewModel)
  }
}
