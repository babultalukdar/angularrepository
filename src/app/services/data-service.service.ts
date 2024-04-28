import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //dataEmitter=new EventEmitter<string>;
  dataEmitter=new Subject<string>();
  constructor() { }

  raiseDataEvenEmitter(data:string){
    // this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
}
