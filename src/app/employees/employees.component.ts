import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 
 name="Pritam shrestha";
 name1="Suchana shrestha";
 name2="Prisumsa shrestha";
 name3="Bimal shrestha";
 name4="Bimala shrestha";
  constructor() { }

  ngOnInit() {
  }

}
