import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal ( event:boolean ) {
    this.showModal = event;
  }

}
