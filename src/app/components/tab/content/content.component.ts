import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TabSubject } from '../tab.subject';
import { ContentDirective } from './content.directive';

@Component({
  selector: 'app-content',
  template: '<ng-template contentHost></ng-template>',
})
export class ContentComponent implements OnInit {
  @Input() tab!: TabSubject;

  @ViewChild(ContentDirective, { static: true }) contentHost!: ContentDirective;

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(this.tab.component);
    componentRef.instance.data = this.tab.data;
  }
}
