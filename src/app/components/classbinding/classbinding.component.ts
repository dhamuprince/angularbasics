import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  public classbind = "text-sucess";
  public hasError = true;
  public isSpecial = true;

  muticlassObj = {
    "text-sucess":!this.hasError,
    "text-danger": this.hasError,
    "text-special":this.isSpecial
  }
  ngOnInit(): void {
  }

}
