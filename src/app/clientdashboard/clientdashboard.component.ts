import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.scss']
})
export class ClientdashboardComponent implements OnInit {


  clientform!:FormGroup;
  constructor(private http:HttpClient,
    private c:ClientService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.clientform=this.fb.group({
      name:[''],
      address:[''],
    })
  }

  addclientdata(){
    this.c.addclientdata(this.clientform.value)
    .subscribe(r=>{

    })

  }


 

}