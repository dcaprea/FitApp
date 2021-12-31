import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fitMenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  usuario: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
