import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Carlyle';
  textPlaceholder="Escribe algo aqui ...";
  textImgSrc="";
  deshabilitado = true;
  imgSrc ='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  listStudents: any[] = [
    {
    id: 1, nombre: 'Carlyle Komalram', estado: 'Libre'
  },
  {
    id: 2, nombre: 'Bhagwan Komalram', estado: 'Promocionado'
  },
  {
    id: 3, nombre: 'Melanie Komalram', estado: 'Regular'
  }

];

  constructor(){
    setInterval( () => this.nombre = 'Bhagwan' , 5000);
    setInterval( () => this.deshabilitado = false , 3000);
  }

  getSuma(a : number , b: number): number{
    return a + b;
  }

  changeImg():void{
    this.imgSrc =this.textImgSrc;
  }
}
