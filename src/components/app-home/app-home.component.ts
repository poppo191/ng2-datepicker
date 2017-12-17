import { Component } from '@angular/core';
import {DatepickerOptions} from '../../ng-datepicker/ng-datepicker.component';
import * as thLocale from 'date-fns/locale/th';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-home',
  templateUrl: 'app-home.component.html'
})
export class AppHomeComponent {
  date: Date;
  options: DatepickerOptions = {
    locale: thLocale
  };
  constructor() {
    this.date = new Date();
  }
}
