import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit , OnChanges{
  users=[
    'cam', 'tao','quyet'
  ]
  userList: any[] =[];
  user:User ={};

  sortBy: string='email';
  sortValue: number =1;
  nameLocalStorage = localStorage.getItem(('users') || '{}');
  constructor(private userService:UserService,
   private routerService: Router,
   
    ) {
      
    
     }
 
 
  ngOnInit(): void {
    
    if( this.nameLocalStorage ==''){
      this.userService.getAllUsers();
      this.userList = JSON.parse(localStorage.getItem('users') || '{}');

    }
    else{
      this.userList = JSON.parse(localStorage.getItem('users') || '{}');

    }
    
     
  
  }
ngOnChanges(){

}

 

  onDeleteUser(id: number){
    if(window.confirm('Bạn có chắc chắn muốn xóa ?')){
      if(id){
        this.users = JSON.parse(localStorage.getItem('users') || '{}');
        this.users.splice(id,1);
            localStorage.setItem('users', JSON.stringify(this.users));
            this.userList = JSON.parse(localStorage.getItem('users') || '{}');
      }
    
    }}
    onSort(name: any){
      this.sortBy= name;
      this.sortValue=- this.sortValue;
  
    }


}
