import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() titulo: string;
  @Output() searchText = new EventEmitter<any>();
  

  constructor() { this.titulo ='';}

  textIn:string = '';
  date: string = '';

  searchTextForm () {
const data = {
  text: this.textIn,
  date: this.date
 }
 this.searchText.emit(data)
 console.log(this.textIn);
}

}
