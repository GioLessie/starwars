import { SwapiServiceService } from './../../../services/swapi-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntityEvent } from 'projects/library/src/utils/model/table.model';
import { Film } from 'src/app/mooc/film.model';
import { PROPS_TO_SHOW_BY_FILM } from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = PROPS_TO_SHOW_BY_FILM;
  dataSource: Film[] = [];

  constructor(public router: Router, public swapiService: SwapiServiceService) {
    this.swapiService.getAllFilms().subscribe((response) => {
      this.dataSource = response;
    });
  }

  public openEntityList(element: EntityEvent) {
    this.router.navigate([
      '/entity/list',
      element.row.episode_id,
      element.entityName,
    ]);
  }
}
