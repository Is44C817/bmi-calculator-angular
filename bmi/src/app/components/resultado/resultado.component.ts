import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  bmi!: number;
  resultado!: string;
  interpretacion!: string;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(route.snapshot.paramMap.get('valor'))
    console.log(this.bmi)
  }

  ngOnInit(): void {
    this.getResutlado();
  }

  getResutlado(){
    if(this.bmi >= 25){
      this.resultado = 'Exceso de peso'
      this.interpretacion = "Tienes un peso corpotal superior al normal"
    }else if( this.bmi >= 18.5){
      this.resultado = 'Normal'
      this.interpretacion = "Tienes un peso corpotal normal"
    }else{
      this.resultado = 'Bajo peso'
      this.interpretacion = "Tienes un peso corpotal bajo al normal"
    }
  }

}
