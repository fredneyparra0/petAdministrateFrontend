import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormPersonService {

  idPets: string[] = [];

  constructor( private http:HttpClient ) { }

  async sendForm (btnValue:string, data:any) {
    if (btnValue === 'create') {
      const petsArray = data.pets.split(',');
      petsArray.forEach((pet:any) => {
        this.http.post('http://localhost:3100/api/pet', { name: pet, type: '' }).subscribe((data: any) => {
          console.log(data);  
          //this.idPets.push(data._id);
        });
      });

      /*this.http.post('http://localhost:3100/api/person', { name: data.name, pets: petsArray }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe((data) => {
        console.log(data);
      })*/
    } else if (btnValue === 'update') {
      console.log('actualizaras una persona ==> ', data);
    }
  }

}
