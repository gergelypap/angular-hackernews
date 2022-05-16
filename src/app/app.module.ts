import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@components/app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ItemListComponent } from '@components/item-list/item-list.component';
import { ItemComponent } from '@components/item/item.component';
import { BaseUrlPipe } from '@pipes/base-url.pipe';
import { TimeAgoPipe } from '@pipes/time-ago.pipe';
import { ItemDetailComponent } from '@components/item-detail/item-detail.component';
import { CommentComponent } from '@components/comment/comment.component';
import { UserDetailComponent } from '@components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemListComponent,
    ItemComponent,
    BaseUrlPipe,
    TimeAgoPipe,
    ItemDetailComponent,
    CommentComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
