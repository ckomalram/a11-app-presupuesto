import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad=0;
    this.formIncorrecto=false;
    this.textIncorrecto='';
   }

  ngOnInit(): void {
  }

  agregarGasto(): void {

    if (this.cantidad> this.presupuestoService.restante) {
      this.formIncorrecto = true;
      this.textIncorrecto= 'Cantidad ingresada supera el presupuesto restante.'
      return;
    }
    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formIncorrecto = true;
      return;
    }


    //crear objeto
    const GASTO = {
      nombre: this.nombreGasto,
      cantidad: this.cantidad
    }

    //eviar obj

    this.presupuestoService.agregarGasto(GASTO);

    //reset form
    this.formIncorrecto = false;
    this.nombreGasto ='';
    this.cantidad =0;



  }

}
