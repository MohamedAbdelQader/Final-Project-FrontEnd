export class LoginViewModel{
 
    Email:string ="";
    Password:string ="";
    RememberMe:boolean=false;
    
}

export class LoginResultViewModel {
    token:any;
    returnUrl ="";
    role:string="user";
    message="";
    success :any;
    id:any;  
}


    
      