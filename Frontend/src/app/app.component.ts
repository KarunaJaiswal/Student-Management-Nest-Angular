import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
  sideBarOpen = true;
  toggleSidebar(){
    this.sideBarOpen = this.sideBarOpen ? false : true
  }
}
