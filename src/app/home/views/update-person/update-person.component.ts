import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal ( event:boolean ) {
    this.showModal = event;
  }

}
