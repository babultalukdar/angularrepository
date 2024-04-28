import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputcomponent',
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.css']
})
export class InputcomponentComponent {

  @Input('inputName')name:String="";

  all:number=0;
  free:number=0;
  premium:number=0;

  selectedRadioButton:string='All';

  @Output()
  filterRadioButtonSelectionChanged:EventEmitter<String>=new EventEmitter<String>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
    //console.log(this.selectedRadioButton);
  }

}
