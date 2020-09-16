import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  constructor() { }

  nombreCereales: string =" Cereales Nuevos"
  nombreTuberculos: string =" Tuberculos Nuevos"
  nombreCacao: string =" Cacao Nuevo"

}
