import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, Subject, filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterTrackerService {
  transformedActiveRoute = new Subject<string[]>();

  constructor(public router: Router) {
    this.router.events.subscribe((arg: any) => {
      if (arg.url) {
        this.transformedActiveRoute.next(
          this.calculateTransformedRoute(arg.url)
        );
      }
    });
  }

  /**
   * The function takes a route string, transforms it into an array, sets the first element to 'Home',
   * and then determines whether to transform it into a detail type or list type based on whether it
   * includes the word 'detail'.
   * @param {string} route - The `route` parameter is a string that represents a route.
   * @returns the result of either `this.transformToDetailType(transformedRoute)` or
   * `this.transformToListType(transformedRoute)`.
   */
  calculateTransformedRoute(route: string) {
    let transformedRoute: string[] = [];
    if (route.length > 1) {
      transformedRoute = transformedRoute.concat(route.split('/'));
    }
    transformedRoute[0] = 'Home';
    if (transformedRoute.includes('detail')) {
      return this.transformToDetailType(transformedRoute);
    }
    if (transformedRoute.includes('list')) {
      return this.transformToListType(transformedRoute);
    }
    return transformedRoute;
  }

  /**
   * The function takes in a string array representing a route and transforms it into a new array with
   * specific elements.
   * @param {string[]} route - The `route` parameter is an array of strings.
   * @returns an array with three elements. The first element is the first element of the input route
   * array. The second element is a string that includes the word "Film" followed by the fourth element
   * of the input route array. The third element is the fifth element of the input route array.
   */
  transformToListType(route: string[]) {
    return [route[0], `Film ${route[3]}`, route[4]];
  }

  /**
   * The function "transformToDetailType" takes in a string array called "route" and returns a new array
   * with the first element of "route", the fourth element of "route" enclosed in backticks, and the
   * fifth element of "route".
   * @param {string[]} route - The `route` parameter is an array of strings.
   * @returns an array that contains the first element of the input `route` array, followed by the fourth
   * and fifth elements of the `route` array.
   */
  transformToDetailType(route: string[]) {
    return [route[0], `${route[3]}`, route[4]];
  }
}
