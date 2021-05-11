import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  constructor() { }
  
  public myid = "testId";
  public test = false;
  ngOnInit(): void {
  }

}
