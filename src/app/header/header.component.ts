import { AfterContentChecked, Component, OnDestroy } from '@angular/core';
import { SetHeaderService } from '../service/set-header.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  showNavBar: boolean = true;
  subscription!: Subscription;

  constructor(private route: ActivatedRoute, private navBar: SetHeaderService) {
    this.subscription = navBar.loggedIn.subscribe((value) => {
      this.showNavBar = value;
    });
  };
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
};
