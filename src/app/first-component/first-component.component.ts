import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
   @Output()
  notify: EventEmitter<any> = new EventEmitter<any>();


  model: any = {};
  displayJson: any = {};
  genders = ['male', 'female'];
  listDropdown = ['Present', 'Absent', 'Perhaps'];
  @ViewChild('f') testForm: NgForm;
  defaultNumberInput: Number = 15;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    Object.assign(this.displayJson,this.model)
    this.notify.emit(this.displayJson);
  }

}

