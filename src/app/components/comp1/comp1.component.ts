import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

    dataEntered:string="";
    constructor(private dataService:DataServiceService){

    }
    btnClick(){
      this.dataService.raiseDataEvenEmitter(this.dataEntered);
    }
}
