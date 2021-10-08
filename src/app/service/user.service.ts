import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  



    users = [
      {
    
        "name": "Angular5qw",
        "phone": 123345,
        "email": "kieu@gmail.com",
        "address": "xom A1- Thôn B",
        "countryId": "2",
        "statesId": "3",
        "citesId": "4"
      },
      {
        "name": "Nông Văn",
        "phone": 3223,
        "email": "ht@fpt.com.vn",
        "address": "163 chiến thắng -Hà Nội",
        "countryId": "1",
        "statesId": "1",
        "citesId": "2",
       
      },
      {
        "name": "Người dùng",
        "phone": 914003312,
        "email": "kt@fpt.com.vn",
        "address": "Hà Đông - Hà Nội",
        "countryId": "2",
        "statesId": "3",
        "citesId": "5",
     
      },
      {
        "name": "Messi",
        "phone": 92131232,
        "email": "messi@fpt.com.vn",
        "address": "Pari-pháp",
        "countryId": "1",
        "statesId": "1",
        "citesId": "1",
 
      }
    ]

   
    getAllUsers(){
      localStorage.setItem('users', JSON.stringify(this.users));
    
    }
   
    addUser(user: any){
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    getUserById(id:number){
      let user:any;
      this.users = JSON.parse(localStorage.getItem('users') || '{}');
     for (let index = 0; index < this.users.length; index++) {
       if(this.users[index].phone ==id){
          user = this.users[index]
       }
       
     }
     
     return user;
    }

 

    


    



}
