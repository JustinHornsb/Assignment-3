import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  visible: boolean = false;
  clickLogs: number[] = [];

  toggleVisibility() {
    if(this.visible === false) {
      this.visible = true;
    }

    else {
      this.visible = false;
    }

    this.clickLogs.push(this.clickLogs.length + 1);
  }

  addClickEvent() {
    const currentTime = Date.now();
    this.clickLogs.push(currentTime);
  }
}
