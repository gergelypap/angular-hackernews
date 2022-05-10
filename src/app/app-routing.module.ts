import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  { path: 'top', data: { list: 'top' }, component: ItemListComponent },
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'latest', data: { list: 'latest' }, component: ItemListComponent },
  { path: 'best', data: { list: 'best' }, component: ItemListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
