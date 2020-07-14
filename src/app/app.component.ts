import { Component, OnInit } from '@angular/core';
import { BasicService } from './basic.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  childData: any = {};
  public timer$ = timer(0, 3000);
  model: any = {};
  label: any;


  constructor(private basicService: BasicService) { }


  ngOnInit() {
     this.basicService.get().subscribe(res => {
      this.label = res;
    });
  }

  public myFunction (model: any): void {
    this.childData = model;
    console.log(model);
  }
}
