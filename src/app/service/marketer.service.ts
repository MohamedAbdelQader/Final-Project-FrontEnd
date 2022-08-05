import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APIViewModel } from '../Models/APIViewModel';
import { EditUserProfile } from '../Models/EditUserProfile';

@Injectable({
  providedIn: 'root',
})
export class MarketerService {
  constructor(private http: HttpClient) {}

  getmarketerById(id: any) {
    return this.http.get<APIViewModel>(
      'http://localhost:4200/editprofile?ID=' + id
    );
  }
  updatemarketer(val: EditUserProfile) {
    return this.http.post<APIViewModel>(
      'http://localhost:4200/marketerprofile',
      val
    );
  }
  public UserId = localStorage.getItem('id');
  getProfileData() {
    return this.http.get<APIViewModel>(
      'https://localhost:63000/User/UpdateProfile?ID=' + this.UserId
    );
  }
  public WalletID = localStorage.getItem('id');
  marketerWallet() {
    return this.http.get<APIViewModel>(
      'https://localhost:63000/Marketer/UpdateWallet' + this.WalletID
    );
  }
  GetOneMarkter() {
    return this.http.get<APIViewModel>(
      'https://localhost:63000/Marketer/GetDetails/?_id=' + this.UserId
    );
  }
}
