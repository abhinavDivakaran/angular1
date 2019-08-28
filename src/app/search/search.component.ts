import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  getname='';

  private mydata: Array<object>=[];
  private status=false;

  constructor(private apiService:ApiService) { }

  onsubmit(data: NgForm){
    console.log(data.value);
    this.apiService.searchdata(data.value).subscribe((response:Array<object>)=>{
      this.mydata=response;
    });
  }

  onclick(data:NgForm){
    console.log(data.value);
    this.apiService.deletedata(data.value).subscribe((response:Array<object>)=>{
      this.mydata=response;
    });
  }
  

  ngOnInit() {
   
  }

  
  

}
