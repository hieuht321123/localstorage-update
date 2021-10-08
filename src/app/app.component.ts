import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private router: Router){

  }
  ngOnInit(): void {
  
   
  }
  logout(){
    if(localStorage.getItem('user')){
    
      localStorage.removeItem('user');
      console.log(localStorage.getItem('user'));
      this.router.navigate(['login']);
    }
}
}
