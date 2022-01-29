import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { httpServicePet } from 'src/app/constants/httpServices';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  filterByTerm (term: string) {
    return this.http.get(`${environment.apiUrl + httpServicePet.byTerm + term}`);
  }

  createNewPet(data: any) {
    return this.http.post(`${environment.apiUrl + httpServicePet.create}`, data);
  }

}
