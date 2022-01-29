import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { httpServicePerson, httpServicePet } from 'src/app/constants/httpServices';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor( private http:HttpClient ) { }

  findAllPersons () {
    return this.http.get(`${environment.apiUrl + httpServicePerson.getAll}`);
  }

  findPersonById ( id:string ) {
    return this.http.get(`${environment.apiUrl + httpServicePerson.getById + id}`);
  }

  updatePerson (id: string, data:any) {
    return this.http.put(`${environment.apiUrl + httpServicePerson.update + id}`, data);
  }
  
  createNewPerson (data: any) {
    return this.http.post(`${environment.apiUrl + httpServicePerson.create}`, data);
  }

  deleteOnePersonById (id: string) {
    return this.http.delete(`${environment.apiUrl + httpServicePerson.delete + id}`);
  }

  filterPersonByTerm (term: string) {
    return this.http.get(`${environment.apiUrl + httpServicePerson.filter + term}`);
  }

}
