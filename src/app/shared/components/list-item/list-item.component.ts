import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() path:string = '';
  @Input() nameBtn: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
