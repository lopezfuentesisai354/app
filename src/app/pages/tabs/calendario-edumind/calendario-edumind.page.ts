import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar';

@Component({
  selector: 'app-calendario-edumind',
  templateUrl: './calendario-edumind.page.html',
  styleUrls: ['./calendario-edumind.page.scss'],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [IonicModule],
  standalone: true
})
export class CalendarioEdumindPage implements OnInit {

  allEvents = [];
  currentMonth: string | undefined;

  calendar = {
    mode: 'month' as CalendarMode,
    currentDate:new Date(2021,10,26)
  }
  constructor() { }

  ngOnInit() {
  }

  onViewTitleChanged(event: any) {
    this.currentMonth = event.title || 'Sin título';
  }

}
