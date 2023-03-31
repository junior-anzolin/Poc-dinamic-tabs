import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContentComponentData } from '../tab/content/content.dto';

@Component({
  selector: 'app-handle-user',
  templateUrl: './handle-user.component.html',
  styleUrls: ['./handle-user.component.scss'],
})
export class HandleUserComponent implements ContentComponentData {
  @Input() data: any;

  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
  });
}
