import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonTabs } from '@ionic/angular';
import { IonHeader, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', { static: false })
  tabs!: IonTabs;
  selectedTab: any;

  constructor() {}

  ngOnInit() {
  }
  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }
}
