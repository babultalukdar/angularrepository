import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from './services/data-service.service';

declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataServiceService]
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'datatable';
  name='List of Employee Details';
  @ViewChild('dtable',{static:false})dataTable:any;
  constructor(private dataService:DataServiceService){
    
  }
  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable();
  }
  ngOnInit(): void {
    
  }
  courseCountRadioButton:String='All';
  onFilterRadioButtonSelectionChanged(data:String){
    this.courseCountRadioButton=data;
    //console.log(this.courseCountRadioButton);
  }
}
