import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../../services/pet.service';

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
  
  constructor( 
    private petService: PetService
  ) { }
  
  ngOnInit(): void {
  }
  
  saveNewPet () {
    this.petService.createNewPet(this.formNewPet.value).subscribe((response:any) => {
      this.closeModalEmitter.emit(false);
      this.formNewPet.reset();
    })
  }

  closeModal () {
    this.closeModalEmitter.emit(false);
  }

}
