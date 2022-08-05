import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIViewModel } from '../Models/APIViewModel';

Injectable({
    providedIn: 'root'
  })


  export class collectionProducts{
    
    constructor(private http:HttpClient) { }



    getProduct(){
return this.http.get<APIViewModel>("https://localhost:63000/Api/Getproduct")
    }
  }