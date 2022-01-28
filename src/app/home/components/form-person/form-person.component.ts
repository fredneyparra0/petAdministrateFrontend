import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormPersonService } from '../../services/form-person.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {

  loadingResults:boolean = false;
  searchProducts: boolean = false;

  petsNumber: any[] = [
    {
      name: "namePet1",
      type: "typePet1"
    }
  ];

  @Input() btnValue: string = '';

  formPerson = new FormGroup({
    name: new FormControl('', [Validators.required]),
    namePet1: new FormControl('', [Validators.required]),
    typePet1: new FormControl('', [Validators.required])
  })

  constructor( private formPersonService: FormPersonService ) { }

  ngOnInit(): void {
  }

  sendForm () {
    //this.formPersonService.sendForm(this.btnValue,this.formPerson.value);
    console.log(this.formPerson.controls);
    console.log(this.formPerson.value)
  }

  addNewPet () {
    const number = this.petsNumber.length + 1;
    this.formPerson.controls = {
      ...this.formPerson.controls,
      [`namePet${number.toString()}`]: new FormControl('hola', [Validators.required]),
      [`typePet${number.toString()}`]: new FormControl('mundo', [Validators.required])
    }
    this.petsNumber = [...this.petsNumber, {
      name: `namePet${number.toString()}`,
      type: `typePet${number.toString()}` 
    }];
    console.log(this.petsNumber);
    console.log(this.formPerson.controls);
    //console.log(this.formPerson.value);
  }

  searchByterm () {
    if (this.formFilterNft.value.term.length <= 0) {
      this.searchProducts = false;
    }else {
      this.searchProducts = true;

    }

  }

}
