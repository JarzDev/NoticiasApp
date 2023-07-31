import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() selectedParams = new EventEmitter<any>();
 
catSelected = 'business';

  categorias :any = [] = [
   
  {value:'business', nombre:'Negocios'},
  {value:'entertainment', nombre:'Entretenimiento'},
  {value:'health', nombre:'Salud'},
  {value:'science', nombre:'Ciencia'},
  {value:'sports', nombre:'Deportes'},
  {value:'technology', nombre:'Tecnologia'},
  {value:'politics', nombre:'Politica'},
  {value:'world', nombre:'Mundo'},
  {value:'tourism', nombre:'Turismo'},
  {value:'food', nombre:'Alimentacion'},
  {value:'top', nombre:'TopNews'},


  ]

  paisSelected = 've';
  paises :any = [] = [
    {value:'ve', nombre:'Venezuela'},
    {value:'cl', nombre:'Chile'},
  {value:'us', nombre:'Estados Unidos'},
  {value:'mx', nombre:'Mexico'},
  {value:'es', nombre:'España'},
  {value:'ar', nombre:'Argentina'},
  {value:'co', nombre:'Colombia'},
  {value:'br', nombre:'Brasil'},
  {value:'fr', nombre:'Francia'},
  {value:'de', nombre:'Alemania'},
  {value:'it', nombre:'Italia'},
  {value:'ru', nombre:'Rusia'},
  {value:'gb', nombre:'Reino Unido'},
  {value:'jp', nombre:'Japon'},
  {value:'ca', nombre:'Canada'},
  {value:'au', nombre:'Australia'},
  {value:'cn', nombre:'China'},
  {value:'kr', nombre:'Corea del Sur'},
  {value:'za', nombre:'Sudafrica'},
  {value:'ch', nombre:'Suiza'},
  {value:'se', nombre:'Suecia'},
  
  ]
searchNews(){

  const params = {
    categoria: this.catSelected,
    pais: this.paisSelected
  }
  this.selectedParams.emit(params);
  
  console.log(this.catSelected);
  console.log(this.paisSelected);
}

}
