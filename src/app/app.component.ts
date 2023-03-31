import { Component } from '@angular/core';
import { HandleUserComponent } from './components/handle-user/handle-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  component = HandleUserComponent
}
