import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidSearchComponent } from './components/invalid-search/invalid-search.component';
import { RepositoryViewComponent } from './components/repository-view/repository-view.component';
import { SearchComponent } from './components/search/search.component';
import { UserBioInformationComponent } from './components/user-bio-information/user-bio-information.component';

const routes: Routes = [
  {path: 'user-search', component: SearchComponent},
  {path: 'repository-search', component: RepositoryViewComponent},
  {path: '',redirectTo: '/user-search', pathMatch: "full"},
  {path: '**', component: InvalidSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
