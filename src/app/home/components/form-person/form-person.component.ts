import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormPersonService } from '../../services/form-person.service';
import { ModalPetComponent } from '../modal-pet/modal-pet.component';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {

  @Output() showModalEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  searchPets: boolean = false;
  pets: any[] = [];
  petsAgregate: any[] = [];
  isErrorFromNumberDOcument: boolean = false;

  formPerson = new FormGroup({
    numberDocument: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });

  formSearchPet = new FormGroup({
    term: new FormControl('', [Validators.required])
  });

  constructor( private formPersonService: FormPersonService ) { }

  ngOnInit(): void {
  }

  sendForm () {
    console.log(this.formPerson.controls);
    console.log(this.formPerson.value)
  }

  
  searchByterm () {
    if (this.formSearchPet.value.term.length <= 0) {
      this.searchPets = false;
    }else {
      this.searchPets = true;
      this.formPersonService.filterByTerm(this.formSearchPet.value.term).subscribe((response:any) => {
        this.pets = response.data;
      });
      
    }
  }
  
  viewModal () {
    this.showModalEmitter.emit(true);
  }

  agregatePet (petAgregateReceived:any) {
    const isPetOnTheList = this.petsAgregate.some(pet => pet._id === petAgregateReceived._id );
    if (!isPetOnTheList) {
      this.petsAgregate.push(petAgregateReceived);
      this.formSearchPet.reset();
    }
  }
  
  removePet (id:string) {
    const indexPet = this.petsAgregate.findIndex(pet => pet._id === id);
    this.petsAgregate.splice(indexPet, 1);
  }

  createNewPerson () {
    if (!this.formPerson.invalid) {
      const idPets = this.petsAgregate.map(pet => pet._id);
      this.formPersonService.createNewPerson({ ...this.formPerson.value, pets: idPets }).subscribe((response: any) => {
        if (response.error) {
          this.isErrorFromNumberDOcument = true;
        } else {
          this.isErrorFromNumberDOcument = false;
          this.formPerson.reset();
          this.petsAgregate = [];
        }
      });
    }
  }

}
