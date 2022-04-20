import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchUser(searchName:string){
    if (searchName !=='') {
      this.searchService.getUser(searchName)
      console.log(searchName)
    };
  };

  searchRepos(searchName:string){
    if (searchName !=='') {
      this.searchService.getRepositories(searchName)
      console.log(searchName)
    };
  };

  ngOnInit(): void {
  }

}
