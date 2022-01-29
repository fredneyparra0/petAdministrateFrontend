import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormPersonService } from '../../services/form-person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  showModal: boolean = false;

  constructor(private formPersonService: FormPersonService) { }

  ngOnInit(): void {
    this.loadComponents();
  }
  
  loadComponents () {
    //this.showModal = this.formPersonService.showModal;
  }

  toggleModal ( event:boolean ) {
    this.showModal = event;
  }

}
