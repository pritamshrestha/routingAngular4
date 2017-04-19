import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
employees=[{name:"pritam",id:"30",gender:"male",age:"30"},
           {name:"suchana",id:"31",gender:"female",age:"20"},
           {name:"prisumsa",id:"3",gender:"female",age:"4"},
           {name:"bimal",id:"40",gender:"male",age:"40"}
            ];

  constructor() { }

  ngOnInit() {
  }

}
