import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, PartialObserver } from 'rxjs';
import { PersonService } from '../../services/person.service';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {

  @Output() showModalEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() mode: 'create' | 'update' = 'create';

  searchPets: boolean = false;
  resultsPetsFindByTerm: any[] = [];
  petsAgregate: any[] = [];
  isErrorFromNumberDocument: boolean = false;
  idPerson: string = '';

  formPerson = new FormGroup({
    numberDocument: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    term: new FormControl('')
  });

  constructor(
    private personService: PersonService,
    private petService: PetService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params:Params) => {
      if (params.id) {
        this.idPerson = params.id;
        this.findPerson(params.id);
      }
    })
  }
  
  findPerson (id: string) {
    this.personService.findPersonById(id).subscribe((person:any) => {
      this.formPerson.patchValue(person.data);
      this.petsAgregate = person.data.pets;
    })
  }

  searchByterm () {
    if(this.formPerson.value.term.length != null) {
      if (this.formPerson.value.term.length <= 0) {
        this.searchPets = false;
      }else {
        this.searchPets = true;
        this.petService.filterByTerm(this.formPerson.value.term).subscribe((response:any) => {
          this.resultsPetsFindByTerm = response.data;
        });
        
      }
    }
  }
  
  viewModal () {
    this.showModalEmitter.emit(true);
  }

  agregatePet (petAgregateReceived:any) {
    const isPetOnTheList = this.petsAgregate.some(pet => pet._id === petAgregateReceived._id );
    if (!isPetOnTheList) {
      this.petsAgregate.push(petAgregateReceived);
      this.formPerson.controls.term.reset();
    }
  }
  
  removePet (id:string) {
    const indexPet = this.petsAgregate.findIndex(pet => pet._id === id);
    this.petsAgregate.splice(indexPet, 1);
  }

  submitPerson () {
    if (this.mode === 'create') {
      this.createNewPerson();
    } else {
      this.updatePerson();
    }
  }


  private updatePerson() {
    const idPets = this.petsAgregate.map(pet => pet._id);
    this.personService.updatePerson(this.idPerson, { ...this.formPerson.value, pets: idPets }).subscribe((response: any) => {
      if(!response.error) this.router.navigate(['']);
    });
  }

  private createNewPerson() {
    const idPets = this.petsAgregate.map(pet => pet._id);
    this.personService.createNewPerson({ ...this.formPerson.value, pets: idPets }).subscribe((response: any) => {
      if (response.error) {
        this.isErrorFromNumberDocument = true;
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
