import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryModule } from 'library';
import { MaterialModule } from './material.module';
import { BasicGridComponent } from './components/templates/basic-grid/basic-grid.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EntityListComponent } from './components/pages/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/pages/entity-detail/entity-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { EntityComponent } from './components/pages/entity/entity.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BasicGridComponent,
    HomeComponent,
    EntityComponent,
    EntityListComponent,
    EntityDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LibraryModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
