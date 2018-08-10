import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  quotes = [
    new Quote(1, 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.' )
  ]

}
