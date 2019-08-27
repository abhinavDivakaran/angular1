import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

    private mydata: Array<object>=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchdata();
  }
  public fetchdata(){
    this.apiService.getData().subscribe((Response:Array<object>)=>{
      this.mydata=Response;
    })

  }
}
