import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormPersonService } from '../../services/form-person.service';

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['./table-items.component.css']
})
export class TableItemsComponent implements OnInit {

  persons: any[] = [];

  constructor( 
    private formPersonService: FormPersonService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.loadComponent()
  
  }

  loadComponent () {
    this.formPersonService.findAllPersons().subscribe((response:any) => {
      this.persons = response.data;
    });
  }

  deletePerson (id: string) {
    this.formPersonService.deleteOnePersonById(id).subscribe((response: any) => {
      const indexPerson = this.persons.findIndex(pet => pet._id === id);
      this.persons.splice(indexPerson, 1);
    });
  }

  editPerson (id: string) {
    this.router.navigate(['/updateperson', id]);
  }

}
