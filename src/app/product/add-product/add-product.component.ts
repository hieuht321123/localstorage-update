import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Countries } from 'src/app/model/country';
import { User } from 'src/app/model/users';
import { CoutryService } from 'src/app/service/coutry.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addUser !: FormGroup;
  countries :any=[];
  countries2 :any=[];
  states :any =[];
  citys: any;
  showListUser ?: any =[];
  constructor(private fb: FormBuilder,
    private router: Router,
    private countriesService: CoutryService,
    private userService: UserService
    ) {
  }

  ngOnInit() {
    this.countriesService.getCountry();
    
    this.countries = JSON.parse(localStorage.getItem('country') || '{}');
    this.addUser = this.fb.group({
   
      userName: ['', [Validators.required]],
      phone: ['',  [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@fpt.com.vn')]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
   
}
get f() { return this.addUser.controls; }


  addUserLocalStorage(){
    const data = this.createDto();
    console.log("data", data);
    if(data){
      this.userService.addUser(data);
      console.log("2",this.showListUser);
    }      
}

 
createDto() {
  const userDto = {
    // name: this.f.names.value,
    
    name: this.f.userName.value,
    phone: this.f.phone.value,
    email: this.f.email.value,
    address: this.f.address.value,
    countryId: this.f.country.value,
    statesId: this.f.state.value,
    citesId: this.f.city.value
  }
  return userDto;
}
onChangeCountry(event: any) {
  const countryId= event.target.value;
  console.log(countryId)
  if (countryId) {
    this.countriesService.getStatesList();
    this.states= this.countriesService.getStateByIds(countryId);
  
     
      console.log("helo",this.states);
       
  } else {
    this.states == null;
    
  }
}

onChangeStates(event: any){

  const statesId= event.target.value;
    console.log(statesId)
    if (statesId) {
      this.countriesService.getCityList();
      this.citys= this.countriesService.getCityByIds(statesId);
    
       
        console.log("helo",this.citys);
      }
    else {
      this.citys == null;
      
  }
}
  onSubmit(){
       this.addUserLocalStorage();
       this.router.navigate(['product']);
  }
  backToList(){
        this.router.navigate(['product']);
  }
}
