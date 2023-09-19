import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entity, Planet } from 'src/app/mooc/entity.model';
import { Film } from 'src/app/mooc/film.model';
import { SwapiServiceService } from 'src/app/services/swapi-service.service';
import { PROPS_TO_SHOW_BY_ENTITY, getEntityId } from 'src/app/utils';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent implements OnInit {
  displayedColumns: string[] = [];
  activeFilmId?: string;
  activeEntityType?: string;

  dataSource: Entity<any>[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public swapiService: SwapiServiceService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.activeEntityType =
      this.activatedRoute.snapshot.paramMap.get('entityType') || '';
    this.activeFilmId = this.activatedRoute.snapshot.paramMap.get('film') || '';
    this.swapiService
      .getEntitiesByFilm(this.activeFilmId!, this.activeEntityType)
      .subscribe((entities: Entity<any>[]) => {
        this.dataSource = entities;
        this.displayedColumns = PROPS_TO_SHOW_BY_ENTITY[this.activeEntityType!];
      });
  }

  openEntity(event: any) {
    this.router.navigate([
      'entity/detail',
      this.activeEntityType,
      getEntityId(event.row.url),
    ]);
  }
}
