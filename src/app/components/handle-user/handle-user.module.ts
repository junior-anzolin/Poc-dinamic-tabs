import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleUserComponent } from './handle-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HandleUserComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  exports: [HandleUserComponent],
})
export class HandleUserModule {}
