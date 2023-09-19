import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, mergeMap, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Film } from '../mooc/film.model';
import { Entity, Planet } from '../mooc/entity.model';
import { getEntityId } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class SwapiServiceService {
  constructor(public http: HttpClient) {}

  getAllFilms(): Observable<Film[]> {
    return this.http.get(`${environment.swapi}films`).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${environment.swapi}films/${id}`);
  }

  getEntity(entityType: string, entityId: string): Observable<Entity<any>> {
    return this.http.get<Entity<any>>(
      `${environment.swapi}${entityType}/${entityId}`
    );
  }

  getEntitiesByFilm(
    idFilm: string,
    entityType: string
  ): Observable<Entity<any>[]> {
    return this.getFilm(idFilm).pipe(
      switchMap((filmDetail: any) => {
        return this.getEntityList(entityType, filmDetail[entityType]);
      })
    );
  }

  getEntityList(
    entityType: string,
    entitiesUrl: string[]
  ): Observable<Entity<any>[]> {
    return new Observable((arg) => {
      let entities: Entity<any>[] = [];
      entitiesUrl.forEach((url: string, index: number) => {
        this.getEntity(entityType, getEntityId(url)).subscribe((entity) => {
          entities.push(entity);
          if (entities.length === entitiesUrl.length) {
            arg.next(entities);
          }
        });
      });
    });
  }
}
