import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { UserBioInformationComponent } from './components/user-bio-information/user-bio-information.component';
import { InvalidSearchComponent } from './components/invalid-search/invalid-search.component';
import { GithubService } from './services/github/github.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    UserBioInformationComponent,
    InvalidSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
