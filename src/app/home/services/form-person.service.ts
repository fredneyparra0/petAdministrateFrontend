import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { httpServicePerson, httpServicePet } from 'src/app/constants/httpServices';

@Injectable({
  providedIn: 'root'
})
export class FormPersonService {

  constructor( private http:HttpClient ) { }

  filterByTerm (term: string) {
    return this.http.get(`${environment.apiUrl + httpServicePet.byTerm + term}`);
  }

  createNewPerson (data: any) {
    return this.http.post(`${environment.apiUrl + httpServicePerson.create}`, data);
  }

  createNewPet(data: any) {
    return this.http.post(`${environment.apiUrl + httpServicePet.create}`, data);
  }

  findAllPersons () {
    return this.http.get(`${environment.apiUrl + httpServicePerson.getAll}`);
  }

  deleteOnePersonById (id: string) {
    return this.http.delete(`${environment.apiUrl + httpServicePerson.delete + id}`);
  }

  findPersonById ( id:string ) {
    return this.http.get(`${environment.apiUrl + httpServicePerson.getById + id}`);
  }

  updatePerson (id: string, data:any) {
    return this.http.put(`${environment.apiUrl + httpServicePerson.update + id}`, data);
  }

}
