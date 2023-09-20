import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormatNamePipe } from '../utils/pipes/format-name.pipe';
import { EntityArrayMaskPipe } from '../utils/pipes/entity-array-mask.pipe';
import { ModalComponent } from './modal/modal.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import * as i0 from "@angular/core";
export class LibraryModule {
}
LibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: LibraryModule, declarations: [LibraryComponent,
        HeaderComponent,
        BreadcrumbComponent,
        LateralMenuComponent,
        TableComponent,
        ButtonComponent,
        ModalComponent,
        SnackBarComponent,
        FormatNamePipe,
        EntityArrayMaskPipe], imports: [MaterialModule, BrowserModule], exports: [LibraryComponent,
        HeaderComponent,
        BreadcrumbComponent,
        LateralMenuComponent,
        TableComponent,
        ButtonComponent,
        ModalComponent,
        SnackBarComponent] });
LibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryModule, imports: [MaterialModule, BrowserModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LibraryComponent,
                        HeaderComponent,
                        BreadcrumbComponent,
                        LateralMenuComponent,
                        TableComponent,
                        ButtonComponent,
                        ModalComponent,
                        SnackBarComponent,
                        FormatNamePipe,
                        EntityArrayMaskPipe,
                    ],
                    imports: [MaterialModule, BrowserModule],
                    exports: [
                        LibraryComponent,
                        HeaderComponent,
                        BreadcrumbComponent,
                        LateralMenuComponent,
                        TableComponent,
                        ButtonComponent,
                        ModalComponent,
                        SnackBarComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3NyYy9saWIvbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBMkJwRSxNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQXZCdEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsbUJBQW1CLGFBRVgsY0FBYyxFQUFFLGFBQWEsYUFFckMsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsY0FBYztRQUNkLGlCQUFpQjsyR0FHUixhQUFhLFlBWmQsY0FBYyxFQUFFLGFBQWE7MkZBWTVCLGFBQWE7a0JBekJ6QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUM7b0JBQ3hDLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGlCQUFpQjtxQkFDbEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9saWJyYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF0ZXJhbE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2xhdGVyYWwtbWVudS9sYXRlcmFsLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3JtYXROYW1lUGlwZSB9IGZyb20gJy4uL3V0aWxzL3BpcGVzL2Zvcm1hdC1uYW1lLnBpcGUnO1xyXG5pbXBvcnQgeyBFbnRpdHlBcnJheU1hc2tQaXBlIH0gZnJvbSAnLi4vdXRpbHMvcGlwZXMvZW50aXR5LWFycmF5LW1hc2sucGlwZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbmFja0JhckNvbXBvbmVudCB9IGZyb20gJy4vc25hY2stYmFyL3NuYWNrLWJhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExpYnJhcnlDb21wb25lbnQsXHJcbiAgICBIZWFkZXJDb21wb25lbnQsXHJcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxyXG4gICAgTGF0ZXJhbE1lbnVDb21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgU25hY2tCYXJDb21wb25lbnQsXHJcbiAgICBGb3JtYXROYW1lUGlwZSxcclxuICAgIEVudGl0eUFycmF5TWFza1BpcGUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbTWF0ZXJpYWxNb2R1bGUsIEJyb3dzZXJNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIExpYnJhcnlDb21wb25lbnQsXHJcbiAgICBIZWFkZXJDb21wb25lbnQsXHJcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxyXG4gICAgTGF0ZXJhbE1lbnVDb21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgU25hY2tCYXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpYnJhcnlNb2R1bGUge31cclxuIl19