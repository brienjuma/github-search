import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositorySearch } from 'src/app/models/repository-search/repository-search';


@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {
  repositories!: RepositorySearch;

  constructor(private http: HttpClient) { 
    this.repositories = new RepositorySearch('',0);

    console.log('Git Hub API in use');
  }

  getRepos(repositoryName: any){
    interface ApiResponse{
      items: any;
      total_count: number;
    }
    return new Promise((resolve: any,reject)=>{
      this.http.get<ApiResponse>(`https://api.github.com/search/repositories?q=${repositoryName}`).toPromise().then(
        (result: any)=> {
          this.repositories.items = result.items;
          this.repositories.total_count = result.total_count;

          console.log(result)
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}
