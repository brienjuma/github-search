import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from 'src/app/services/repo-search/repo-search.service';
import { RepositorySearch } from 'src/app/models/repository-search/repository-search';

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css'],
  providers: [ RepoSearchService]
})
export class RepositoryViewComponent implements OnInit {

  repositories!: RepositorySearch;

  constructor(public repoSearch: RepoSearchService) { }

  ngOnInit(): void {
    this.repositories = this.repoSearch.repositories;
    this.searchRepo("akan-names");

  }

  searchRepo(searchName: string){
    if (searchName !=='') {
      this.repoSearch.getRepos(searchName)
      console.log(searchName)
    };
  };
}
