import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/list";
import * as i3 from "@angular/material/divider";
export class LateralMenuComponent {
}
LateralMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LateralMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LateralMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: LateralMenuComponent, selector: "lib-lateral-menu", ngImport: i0, template: "<!-- LAT MENU -->\r\n<div class=\"lat-menu\">\r\n  <mat-list>\r\n    <h2>Ships</h2>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>\r\n<!-- LAT MENU -->\r\n", styles: [".lat-menu{min-width:250px;height:100%}\n"], dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i2.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i2.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "component", type: i3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i2.MatListItemTitle, selector: "[matListItemTitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LateralMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-lateral-menu', template: "<!-- LAT MENU -->\r\n<div class=\"lat-menu\">\r\n  <mat-list>\r\n    <h2>Ships</h2>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>\r\n<!-- LAT MENU -->\r\n", styles: [".lat-menu{min-width:250px;height:100%}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXJhbC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvc3JjL2xpYi9sYXRlcmFsLW1lbnUvbGF0ZXJhbC1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvc3JjL2xpYi9sYXRlcmFsLW1lbnUvbGF0ZXJhbC1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTzFDLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7cUdBQXBCLG9CQUFvQix3RENQakMsa2RBZ0JBOzJGRFRhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxhdGVyYWwtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xhdGVyYWwtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGF0ZXJhbC1tZW51LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXRlcmFsTWVudUNvbXBvbmVudCB7fVxyXG4iLCI8IS0tIExBVCBNRU5VIC0tPlxyXG48ZGl2IGNsYXNzPVwibGF0LW1lbnVcIj5cclxuICA8bWF0LWxpc3Q+XHJcbiAgICA8aDI+U2hpcHM8L2gyPlxyXG4gICAgPG1hdC1saXN0LWl0ZW0+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXRMaXN0SXRlbUljb24+cm9ja2V0PC9tYXQtaWNvbj5cclxuICAgICAgPGRpdiBtYXRMaXN0SXRlbVRpdGxlPnNoaXAubmFtZTwvZGl2PlxyXG4gICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbT5cclxuICAgICAgPG1hdC1pY29uIG1hdExpc3RJdGVtSWNvbj5yb2NrZXQ8L21hdC1pY29uPlxyXG4gICAgICA8ZGl2IG1hdExpc3RJdGVtVGl0bGU+c2hpcC5uYW1lPC9kaXY+XHJcbiAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgPC9tYXQtbGlzdD5cclxuPC9kaXY+XHJcbjwhLS0gTEFUIE1FTlUgLS0+XHJcbiJdfQ==