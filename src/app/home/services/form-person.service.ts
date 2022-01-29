import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormPersonService {

  constructor( private http:HttpClient ) { }

  filterByTerm (term: string) {
    return this.http.get(`http://localhost:3100/api/petByTerm/${term}`);
  }

  createNewPerson (data: any) {
    return this.http.post('http://localhost:3100/api/person', data);
  }

  createNewPet(data: any) {
    return this.http.post('http://localhost:3100/api/pet', data)
  }

  findAllPersons () {
    return this.http.get('http://localhost:3100/api/person')
  }

  deleteOnePersonById (id: string) {
    return this.http.delete(`http://localhost:3100/api/person/${id}`)
  }

}
