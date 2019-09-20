import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//service
import { DataService } from '../services/dataService';
//component
import { TakeImgComponent } from './modal/take-img/take-img.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  private _opened: boolean = true;
  closeResult: string
  public userInformation:any;
  // public userInformation:any = {
  //   "login": "Urvashi2707",
  //   "id": 29358439,
  //   "node_id": "MDQ6VXNlcjI5MzU4NDM5",
  //   "avatar_url": "https://avatars3.githubusercontent.com/u/29358439?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/Urvashi2707",
  //   "html_url": "https://github.com/Urvashi2707",
  //   "followers_url": "https://api.github.com/users/Urvashi2707/followers",
  //   "following_url": "https://api.github.com/users/Urvashi2707/following{/other_user}",
  //   "gists_url": "https://api.github.com/users/Urvashi2707/gists{/gist_id}",
  //   "starred_url": "https://api.github.com/users/Urvashi2707/starred{/owner}{/repo}",
  //   "subscriptions_url": "https://api.github.com/users/Urvashi2707/subscriptions",
  //   "organizations_url": "https://api.github.com/users/Urvashi2707/orgs",
  //   "repos_url": "https://api.github.com/users/Urvashi2707/repos",
  //   "events_url": "https://api.github.com/users/Urvashi2707/events{/privacy}",
  //   "received_events_url": "https://api.github.com/users/Urvashi2707/received_events",
  //   "type": "User",
  //   "site_admin": false,
  //   "name": null,
  //   "company": null,
  //   "blog": "",
  //   "location": null,
  //   "email": null,
  //   "hireable": null,
  //   "bio": null,
  //   "public_repos": 11,
  //   "public_gists": 0,
  //   "followers": 0,
  //   "following": 1,
  //   "created_at": "2017-06-11T19:06:38Z",
  //   "updated_at": "2019-09-16T18:11:41Z"
  // };
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private _dataService:DataService,private modalService: NgbModal) { }

  ngOnInit() {
    var d  = new Date(this.userInformation['created_at']);
    var u  = new Date(this.userInformation['updated_at']);
    this.userInformation['created'] = d.getDate() +'/'+ Number(d.getMonth()+1) + '/' + d.getFullYear();
    this.userInformation['updated'] = u.getDate() +'/'+ Number(u.getMonth()+1) + '/' + u.getFullYear();
    console.log("huhjg",this.userInformation)
    this._dataService.getuserInfo().subscribe(res =>{
      console.log(res);
      // this.userInformation = res;
    })
  }

  openCaptureModal(){
    // this.modalService.open({ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
    const activeModal = this.modalService.open(TakeImgComponent);
    console.log("coming here");
    // activeModal.componentInstance.modalHeader = 'Booking Details';
    // activeModal.componentInstance.modalContent = res;
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

