import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisesReponse } from '../interfaces/paises-response';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe(paises => this.paises = paises);
  }

  drop(evento:CdkDragDrop<PaisesReponse>){
    // console.log("ok", evento);
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }

}
