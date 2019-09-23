//library
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//component
//services
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/dataService';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  public repoList:any;

  constructor(private _githubService:GithubService,private _router:Router,private _dataService:DataService) { }

  ngOnInit() {
    this._githubService.getRepo().subscribe( res => {
      this.repoList = res;
      console.log("fjkhszfkj")
    });
  }

  getContents(repoObj){
    this._githubService.getContent(repoObj).subscribe(res => {
      this._dataService.setFolder(res);
      this._router.navigate(['/pages/repo']);
    });
  }
}
