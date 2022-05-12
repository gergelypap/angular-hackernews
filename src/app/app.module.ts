import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { BaseUrlPipe } from '@pipes/base-url.pipe';
import { TimeAgoPipe } from '@pipes/time-ago.pipe';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CommentComponent } from './comment/comment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

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
