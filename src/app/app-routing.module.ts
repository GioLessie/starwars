import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EntityListComponent } from './components/pages/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/pages/entity-detail/entity-detail.component';
import { EntityComponent } from './components/pages/entity/entity.component';

const routes: Routes = [
  {
    component: EntityComponent,
    path: 'entity',
    children: [
      {
        component: EntityListComponent,
        path: 'list/:film/:entityType',
      },
      {
        component: EntityDetailComponent,
        path: 'detail/:entityType/:entityId',
      },
    ],
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    component: HomeComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
