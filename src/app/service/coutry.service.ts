import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Countries } from '../model/country';
import { States } from '../model/states';

@Injectable({
  providedIn: 'root'
})
export class CoutryService {

  constructor(
  ) { }

  countries= [
    {
      "id": 1,
      "nameCountry": "Ha Noi"
    },
    {
      "id": 2,
      "nameCountry": "Nam Dinh"
    }
  ]

  states= [
    {
      "id": 1,
      "nameStates": "Nam Tu liem",
      "countyId": 1
    },
    {
      "id": 2,
      "nameStates": "Bac Tu Liem",
      "countyId": 1
    },
    {
      "id": 3,
      "nameStates": "Xuân Trường",
      "countyId": 2
    },
    {
      "id": 4,
      "nameStates": "Y yen",
      "countyId": 2
    }
  ]
  
  cities = [
    {
      "id": 1,
      "nameCities": "My dinh 2",
      "statesId": 1
    },
    {
      "id": 2,
      "nameCities": "My dinh 1",
      "statesId": 1
    },
    {
      "id": 3,
      "nameCities": "Thượng Đình",
      "statesId": 2
    },
    {
      "id": 4,
      "nameCities": "Văn Quán",
      "statesId": 2
    },
    {
      "id": 5,
      "nameCities": "Xã 1",
      "statesId": 3
    },
    {
      "id": 6,
      "nameCities": "Xã 2",
      "statesId": 3
    },
    {
      "id": 7,
      "nameCities": "Xã 3",
      "statesId": 3
    },
    {
      "id": 8,
      "nameCities": "Xã 21",
      "statesId": 4
    },
    {
      "id": 9,
      "nameCities": "Xã 22",
      "statesId": 4
    }
  ]

  getCountry(){

    localStorage.setItem('country', JSON.stringify( this.countries));

 
  }
  
  getStatesList(){

    localStorage.setItem('states', JSON.stringify( this.states));
   
  }
  getCityList(){

    localStorage.setItem('citys', JSON.stringify( this.cities));
 
  }
  getStateByIds(id: any){
    let states:any[]=[];
    this.states = JSON.parse(localStorage.getItem('states') || '{}');
   for (let index = 0; index < this.states.length; index++) {
     if(this.states[index].countyId ==id){
       states.push(this.states[index]);
     }
     
   }
   
   return states;
  }

  getCountryById(id: any){
    let country:any;
    this.countries = JSON.parse(localStorage.getItem('country') || '{}');
   for (let index = 0; index < this.countries.length; index++) {
     if(this.countries[index].id ==id){
      country = this.countries[index];
      break;
     }
     
   }
   
   return country;
  }
  
  getStatesById(id: any){
    let state:any;
    this.states = JSON.parse(localStorage.getItem('states') || '{}');
   for (let index = 0; index < this.states.length; index++) {
     if(this.states[index].id ==id){
      state = this.states[index];
      break;
     }
     
   }
   
   return state;
  }
  getCityById(id: any){
    let city:any;
    this.cities = JSON.parse(localStorage.getItem('citys') || '{}');
   for (let index = 0; index < this.cities.length; index++) {
     if(this.cities[index].id ==id){
      city = this.cities[index];
      break;
     }
     
   }
   
   return city;
  }


  getCityByIds(id: any){
    let citys:any[]=[];
   for (let index = 0; index < this.cities.length; index++) {
     if(this.cities[index].statesId ==id){
       citys.push(this.cities[index]);
     }
     
   }
   return citys;
}
}