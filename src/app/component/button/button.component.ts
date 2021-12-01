import { Component, OnInit, Input, Output, NgModule} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  text!: String;
  @Input() 
  color!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
