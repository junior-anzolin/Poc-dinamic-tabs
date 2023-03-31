import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ContentModule } from './content/content.module';
import { TabComponent } from './tab.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    ContentModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [TabComponent],
})
export class TabModule {}
