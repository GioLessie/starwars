import { RouterTrackerService } from './../../../services/router-tracker.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.scss'],
})
export class BasicGridComponent {
  breadcrumbRoutes: string[] = [];

  constructor(public routerTrackerService: RouterTrackerService) {
    this.routerTrackerService.transformedActiveRoute.subscribe((route) => {
      this.breadcrumbRoutes = route;
    });
  }
}
