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

@NgModule({
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
})
export class LibraryModule {}
