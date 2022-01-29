import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormPersonService } from '../../services/form-person.service';

@Component({
  selector: 'app-modal-pet',
  templateUrl: './modal-pet.component.html',
  styleUrls: ['./modal-pet.component.css']
})
export class ModalPetComponent implements OnInit {

  @Output() closeModalEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  formNewPet = new FormGroup({
    name: new FormControl('', [Validators.required]), 
    type: new FormControl('', [Validators.required])
  });
  
  constructor( private formPersonService: FormPersonService  ) { }
  
  ngOnInit(): void {
  }
  
  saveNewPet () {
    console.log(this.formNewPet.value);
    this.formPersonService.createNewPet(this.formNewPet.value).subscribe((response:any) => {
      console.log(response);
      this.closeModalEmitter.emit(false);
      this.formNewPet.reset();
    })


  }

  closeModal () {
    this.closeModalEmitter.emit(false);
  }

}
