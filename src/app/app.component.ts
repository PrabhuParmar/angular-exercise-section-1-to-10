import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise2-project2';
  menuData: string = 'home';

  selectedMenu = (data: string) => {
    this.menuData = data;
  };
};
