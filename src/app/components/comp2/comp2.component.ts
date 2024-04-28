import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{
  entereText:string="";
  constructor(private dataService:DataServiceService){}
  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((data)=>{
      this.entereText=data;
      console.log(this.entereText);
    })
  }
}
