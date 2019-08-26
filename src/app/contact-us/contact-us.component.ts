import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  getname='';
  getemail='';
  getmessage='';



  onclick(data:NgForm){
    console.log(data.value);
    this.getname=data.value.name;
    this.getemail=data.value.email;
    this.getmessage=data.value.msg;

  }

  constructor() { }

  ngOnInit() {
  }

}
