import { Component, OnInit, Input, Output, EventEmitter, NgModule} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
  @Output() btnclick=new EventEmitter(); 
  
    faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {}
   onclick() {
      this.btnclick.emit();
  }


}