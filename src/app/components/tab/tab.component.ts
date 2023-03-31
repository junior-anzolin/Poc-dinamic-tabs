import { Component, Input, OnInit } from '@angular/core';
import { TabSubject } from './tab.subject';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() component!: any;

  tabs: TabSubject[] = [];

  constructor() {}

  ngOnInit(): void {
    this.createTab();
  }

  createTab() {
    console.log('Chamou');
    this.tabs.push(
      new TabSubject({
        label: `tab ${this.tabs.length + 1}`,
        component: this.component,
      })
    );
  }

  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
