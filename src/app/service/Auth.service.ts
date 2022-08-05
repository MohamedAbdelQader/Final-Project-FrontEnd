import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    Logged:Subject<boolean> = new Subject<boolean>();
    constructor(){
        this.Logged.next(this.IsLoggedIn());
    }
    getLooggedStatus(){
       return this.Logged.asObservable();
    }
    setLooggedStatus(status:boolean){
        return this.Logged.next(status);
     }
    IsLoggedIn():boolean{
        let token =localStorage.getItem('id')
        if(token != null){
            return true;
        }
        return false;
    }
    getHeaderForHTTP(){
        let headers = new HttpHeaders({  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`,
        });
        return{ headers: headers };
    }
    getToken(){
       
        return localStorage.getItem("Token")
    }
    GetCurrentUserID():string{
        return localStorage.getItem("id")??""
    }
    GetCurrentRole():string{
        return localStorage.getItem("role")??""
    }
}