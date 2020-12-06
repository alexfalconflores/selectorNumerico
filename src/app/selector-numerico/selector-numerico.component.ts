import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectorNumericoComponent implements OnInit {

  @Input() minimo = '';
  @Input() maximo = '';

  actual = 0;

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.actual = Number(this.minimo);
  }

  // tslint:disable-next-line: typedef
  incrementar(){
    if (this.actual < Number(this.maximo)) {
      this.actual++;
    }
  }

  // tslint:disable-next-line: typedef
  decrementar(){
    if (this.actual > Number(this.minimo)) {
      this.actual--;
    }
  }

  // tslint:disable-next-line: typedef
  fijar(v: number){
    if (v >= Number(this.minimo) && v <= Number(this.maximo)){
      this.actual = v;
    }
  }

}
