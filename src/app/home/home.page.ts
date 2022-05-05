import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  students: any [];

  constructor() {}
  ngOnInit() {
    fetch('./assets/data/students.json').then(res => res.json())
    .then(json=>{
      this.students = json;
    });
  }


}
