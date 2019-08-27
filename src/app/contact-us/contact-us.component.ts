import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ApiService} from '../api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  getname='';
  getemail='';
  getmessage='';
  getphno='';



  onclick(data:NgForm){
    console.log(data.value);
    
    this.apiservice.insertdata(data.value).subscribe((response)=>{

      console.log(data.value);
      alert("sucessfull..");
    });

  }

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

}
