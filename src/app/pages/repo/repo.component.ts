//library
import { Component, OnInit } from '@angular/core';
//service
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/dataService';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  public contentList:any;
  constructor(private _githubService:GithubService,private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.getSetFolder().subscribe(res =>{
      this.contentList = res;
      if(res){
        for(let i = 0;i < res.length;i++){
          var arr = res[i]['name'].split(".");
          if(arr.length == 1){
            res[i].icon = "fa fa-folder";
          }
          else{
            res[i].icon = "fa fa-file-code-o";
          }
        }
      }
      console.log(this.contentList)
    });
  }

  getContents(r){
    console.log("repooooooooo",r)
  }

}
