import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from '@components/item-detail/item-detail.component';
import { ItemListComponent } from '@components/item-list/item-list.component';
import { UserDetailComponent } from '@components/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'top', data: { list: 'top' }, component: ItemListComponent },
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'latest', data: { list: 'latest' }, component: ItemListComponent },
  { path: 'best', data: { list: 'best' }, component: ItemListComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'user/:username', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
