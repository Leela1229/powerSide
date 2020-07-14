import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  labels = ['Big Warehouse Sales', 'This Saturday', 'Don\'t miss your chance'];

  constructor() { }

  get() {
    return of(this.labels);
  }
}
