import * as i0 from '@angular/core';
import { Injectable, Component, Input, Pipe, EventEmitter, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i1$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5 from '@angular/common';
import * as i2 from '@angular/material/list';
import { MatListModule, MatListItemIcon } from '@angular/material/list';
import * as i3 from '@angular/material/divider';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3$1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i4 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i2$1 from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import * as i2$2 from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';

class LibraryService {
    constructor() { }
}
LibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LibraryComponent {
}
LibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: LibraryComponent, selector: "lib-library", ngImport: i0, template: `
    <p>
      library works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-library', template: `
    <p>
      library works!
    </p>
  ` }]
        }] });

class HeaderComponent {
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: HeaderComponent, selector: "lib-header", ngImport: i0, template: "<!-- HEADER -->\r\n<mat-toolbar color=\"primary\" class=\"header\">\r\n  <div class=\"container\">\r\n    <h1 class=\"header__title\">\r\n      <mat-icon class=\"header__icon\">rocket</mat-icon> Star Wars Wiki\r\n    </h1>\r\n  </div>\r\n</mat-toolbar>\r\n<!-- HEADER -->\r\n", styles: [".header__title{margin:0;cursor:pointer}.header__icon{font-size:30px;cursor:pointer}\n"], dependencies: [{ kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i1$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-header', template: "<!-- HEADER -->\r\n<mat-toolbar color=\"primary\" class=\"header\">\r\n  <div class=\"container\">\r\n    <h1 class=\"header__title\">\r\n      <mat-icon class=\"header__icon\">rocket</mat-icon> Star Wars Wiki\r\n    </h1>\r\n  </div>\r\n</mat-toolbar>\r\n<!-- HEADER -->\r\n", styles: [".header__title{margin:0;cursor:pointer}.header__icon{font-size:30px;cursor:pointer}\n"] }]
        }] });

class BreadcrumbComponent {
    constructor() {
        this.routes = [];
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: BreadcrumbComponent, selector: "lib-breadcrumb", inputs: { routes: "routes" }, ngImport: i0, template: "<!-- BREADCRUMB -->\r\n<mat-toolbar color=\"primary\" class=\"breadcrumb\">\r\n  <div class=\"container\">\r\n    <p class=\"breadcrumb__list\">\r\n      <span *ngFor=\"let item of routes\">\r\n        <span>{{ item }}</span>\r\n        <span> > </span>\r\n      </span>\r\n    </p>\r\n  </div>\r\n</mat-toolbar>\r\n<!-- BREADCRUMB -->\r\n", styles: [".breadcrumb{margin:10px 0;height:40px}.breadcrumb__list{margin:0}.breadcrumb__list span{font-size:16px}\n"], dependencies: [{ kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-breadcrumb', template: "<!-- BREADCRUMB -->\r\n<mat-toolbar color=\"primary\" class=\"breadcrumb\">\r\n  <div class=\"container\">\r\n    <p class=\"breadcrumb__list\">\r\n      <span *ngFor=\"let item of routes\">\r\n        <span>{{ item }}</span>\r\n        <span> > </span>\r\n      </span>\r\n    </p>\r\n  </div>\r\n</mat-toolbar>\r\n<!-- BREADCRUMB -->\r\n", styles: [".breadcrumb{margin:10px 0;height:40px}.breadcrumb__list{margin:0}.breadcrumb__list span{font-size:16px}\n"] }]
        }], propDecorators: { routes: [{
                type: Input
            }] } });

class ButtonComponent {
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ButtonComponent, selector: "lib-button", ngImport: i0, template: "<p>button works!</p>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', template: "<p>button works!</p>\r\n" }]
        }] });

class LateralMenuComponent {
}
LateralMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LateralMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LateralMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: LateralMenuComponent, selector: "lib-lateral-menu", ngImport: i0, template: "<!-- LAT MENU -->\r\n<div class=\"lat-menu\">\r\n  <mat-list>\r\n    <h2>Ships</h2>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>\r\n<!-- LAT MENU -->\r\n", styles: [".lat-menu{min-width:250px;height:100%}\n"], dependencies: [{ kind: "component", type: i1$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i2.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i2.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "component", type: i3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i2.MatListItemTitle, selector: "[matListItemTitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LateralMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-lateral-menu', template: "<!-- LAT MENU -->\r\n<div class=\"lat-menu\">\r\n  <mat-list>\r\n    <h2>Ships</h2>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>rocket</mat-icon>\r\n      <div matListItemTitle>ship.name</div>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>\r\n<!-- LAT MENU -->\r\n", styles: [".lat-menu{min-width:250px;height:100%}\n"] }]
        }] });

const isArray = (item) => {
    return typeof item !== 'object';
};

class FormatNamePipe {
    transform(value, ...args) {
        return value
            .replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        })
            .replace(/[_]/g, function (letter) {
            return ' ';
        });
    }
}
FormatNamePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FormatNamePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FormatNamePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: FormatNamePipe, name: "formatName" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FormatNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatName',
                }]
        }] });

class EntityArrayMaskPipe {
    transform(value, ...args) {
        return typeof value === 'string' || typeof value === 'number'
            ? value
            : `${value.length} items`;
    }
}
EntityArrayMaskPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: EntityArrayMaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EntityArrayMaskPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: EntityArrayMaskPipe, name: "entityArrayMask" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: EntityArrayMaskPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'entityArrayMask',
                }]
        }] });

class TableComponent {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = [];
        this.enableClickInRow = false;
        this.entityClickHandler = new EventEmitter();
        this.rowClickHandler = new EventEmitter();
    }
    isArray(item) {
        return isArray(item);
    }
    handleEntityClick(row, name) {
        if (this.enableClickInRow) {
            return;
        }
        this.entityClickHandler.emit({
            row: row,
            entityName: name,
        });
    }
    handleRowClick(row) {
        if (!this.enableClickInRow) {
            return;
        }
        this.rowClickHandler.emit({
            row: row,
        });
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: TableComponent, selector: "lib-table", inputs: { displayedColumns: "displayedColumns", dataSource: "dataSource", enableClickInRow: "enableClickInRow" }, outputs: { entityClickHandler: "entityClickHandler", rowClickHandler: "rowClickHandler" }, ngImport: i0, template: "<!-- TABLE -->\r\n<div class=\"table\">\r\n  <div class=\"table__loader\" *ngIf=\"dataSource.length === 0\">\r\n    <mat-spinner [diameter]=\"60\"> </mat-spinner>\r\n  </div>\r\n  <table\r\n    mat-table\r\n    *ngIf=\"dataSource.length !== 0\"\r\n    [dataSource]=\"dataSource\"\r\n    class=\"mat-elevation-z8\"\r\n  >\r\n    <!-- Columns -->\r\n    <ng-container\r\n      *ngFor=\"let column of displayedColumns\"\r\n      [matColumnDef]=\"column\"\r\n    >\r\n      <!-- Column Header -->\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        {{ column | formatName }}\r\n      </th>\r\n      <!-- Column Content -->\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element; let i = index\"\r\n        (click)=\"handleRowClick(element)\"\r\n        [ngClass]=\"{ clickable: enableClickInRow }\"\r\n      >\r\n        <button\r\n          mat-button\r\n          [disabled]=\"isArray(element[column])\"\r\n          (click)=\"handleEntityClick(element, column)\"\r\n        >\r\n          {{ element[column] | entityArrayMask }}\r\n          <mat-icon *ngIf=\"!isArray(element[column])\">open_in_new</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n</div>\r\n<!-- TABLE -->\r\n", styles: [".table{width:100%}.table__loader{margin:50px 0;display:flex;justify-content:center}.table .clickable{cursor:pointer}\n"], dependencies: [{ kind: "component", type: i1$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i1$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3$1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i3$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i4.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: FormatNamePipe, name: "formatName" }, { kind: "pipe", type: EntityArrayMaskPipe, name: "entityArrayMask" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-table', template: "<!-- TABLE -->\r\n<div class=\"table\">\r\n  <div class=\"table__loader\" *ngIf=\"dataSource.length === 0\">\r\n    <mat-spinner [diameter]=\"60\"> </mat-spinner>\r\n  </div>\r\n  <table\r\n    mat-table\r\n    *ngIf=\"dataSource.length !== 0\"\r\n    [dataSource]=\"dataSource\"\r\n    class=\"mat-elevation-z8\"\r\n  >\r\n    <!-- Columns -->\r\n    <ng-container\r\n      *ngFor=\"let column of displayedColumns\"\r\n      [matColumnDef]=\"column\"\r\n    >\r\n      <!-- Column Header -->\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        {{ column | formatName }}\r\n      </th>\r\n      <!-- Column Content -->\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element; let i = index\"\r\n        (click)=\"handleRowClick(element)\"\r\n        [ngClass]=\"{ clickable: enableClickInRow }\"\r\n      >\r\n        <button\r\n          mat-button\r\n          [disabled]=\"isArray(element[column])\"\r\n          (click)=\"handleEntityClick(element, column)\"\r\n        >\r\n          {{ element[column] | entityArrayMask }}\r\n          <mat-icon *ngIf=\"!isArray(element[column])\">open_in_new</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n</div>\r\n<!-- TABLE -->\r\n", styles: [".table{width:100%}.table__loader{margin:50px 0;display:flex;justify-content:center}.table .clickable{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { displayedColumns: [{
                type: Input
            }], dataSource: [{
                type: Input
            }], enableClickInRow: [{
                type: Input
            }], entityClickHandler: [{
                type: Output
            }], rowClickHandler: [{
                type: Output
            }] } });

class ModalComponent {
}
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ModalComponent, selector: "lib-modal", ngImport: i0, template: "<h1 mat-dialog-title>Important!</h1>\r\n<div mat-dialog-content>Are you sure you want to procced?</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>No</button>\r\n  <button mat-button mat-dialog-close cdkFocusInitial [mat-dialog-close]=\"true\">\r\n    Ok\r\n  </button>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "component", type: i1$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i2$1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i2$1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i2$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i2$1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal', template: "<h1 mat-dialog-title>Important!</h1>\r\n<div mat-dialog-content>Are you sure you want to procced?</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>No</button>\r\n  <button mat-button mat-dialog-close cdkFocusInitial [mat-dialog-close]=\"true\">\r\n    Ok\r\n  </button>\r\n</div>\r\n" }]
        }] });

class SnackBarComponent {
}
SnackBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SnackBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SnackBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SnackBarComponent, selector: "lib-snack-bar", ngImport: i0, template: "<span matSnackBarActions>\r\n  <button mat-button matSnackBarAction>Applied</button>\r\n</span>\r\n", styles: [""], dependencies: [{ kind: "component", type: i1$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i2$2.MatSnackBarActions, selector: "[matSnackBarActions]" }, { kind: "directive", type: i2$2.MatSnackBarAction, selector: "[matSnackBarAction]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SnackBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-snack-bar', template: "<span matSnackBarActions>\r\n  <button mat-button matSnackBarAction>Applied</button>\r\n</span>\r\n" }]
        }] });

class MaterialModule {
}
MaterialModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MaterialModule, imports: [MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCommonModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule], exports: [MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatListItemIcon,
        MatCommonModule,
        MatTableModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule] });
MaterialModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MaterialModule, imports: [MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCommonModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule, MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCommonModule,
        MatTableModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatSlideToggleModule,
                        MatToolbarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatSidenavModule,
                        MatListModule,
                        MatCommonModule,
                        MatDialogModule,
                        MatSnackBarModule,
                        MatProgressSpinnerModule,
                    ],
                    exports: [
                        MatSlideToggleModule,
                        MatToolbarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatSidenavModule,
                        MatListModule,
                        MatListItemIcon,
                        MatCommonModule,
                        MatTableModule,
                        MatDialogModule,
                        MatSnackBarModule,
                        MatProgressSpinnerModule,
                    ],
                }]
        }] });

class LibraryModule {
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

/*
 * Public API Surface of library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent, ButtonComponent, HeaderComponent, LateralMenuComponent, LibraryComponent, LibraryModule, LibraryService, ModalComponent, SnackBarComponent, TableComponent };
//# sourceMappingURL=library.mjs.map
