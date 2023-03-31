import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentDirective } from './content.directive';

@NgModule({
  declarations: [ContentComponent, ContentDirective],
  imports: [CommonModule],
  exports: [ContentComponent],
})
export class ContentModule {}
