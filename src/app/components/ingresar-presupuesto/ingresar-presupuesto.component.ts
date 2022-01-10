import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {

  cantidad:number;
  cantidadIncorrecta: boolean;

  constructor(private presupuestoService: PresupuestoService, private router: Router) {
    this.cantidad=0;
    this.cantidadIncorrecta = false;
   }


  ngOnInit(): void {
  }

  agregarPresupuesto(){
    if (this.cantidad<= 0) {
      this.cantidadIncorrecta= true;
      return;
    }
    this.cantidadIncorrecta= false;

    this.presupuestoService.presupuesto= this.cantidad;
    this.presupuestoService.restante= this.cantidad;

    this.router.navigate(['/gastos']);

  }

}
