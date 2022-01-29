import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['./table-items.component.css']
})
export class TableItemsComponent implements OnInit {
  
  @ViewChild("term") term!: ElementRef;

  persons: any[] = [];

  formFilterByName = new FormGroup({
    term: new FormControl('')
  }) 

  constructor( 
    private personService: PersonService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.loadComponent()
  }

  loadComponent () {
    this.personService.findAllPersons().subscribe((response:any) => {
      this.persons = response.data;
    });
  }

  deletePerson (id: string) {
    this.personService.deleteOnePersonById(id).subscribe((response: any) => {
      const indexPerson = this.persons.findIndex(pet => pet._id === id);
      this.persons.splice(indexPerson, 1);
    });
  }

  editPerson (id: string) {
    this.router.navigate(['/updateperson', id]);
  }

  findPersonByTerm () {
    if (this.term.nativeElement.value.length) {
      this.personService.filterPersonByTerm(this.term.nativeElement.value).subscribe((response:any) => {
        this.persons = response.data;
      })
    } else {
      this.loadComponent()
    }
  }

}
