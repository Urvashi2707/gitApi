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

  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private _dataService:DataService,private modalService: NgbModal) { }

  ngOnInit() {
    setTimeout(()=>{
      this._dataService.getuserInfo().subscribe(res =>{
        this.userInformation = res;
        console.log(res,"pages");
        var d  = new Date(this.userInformation['created_at']);
        var u  = new Date(this.userInformation['updated_at']);
        this.userInformation['created'] = d.getDate() +'/'+ Number(d.getMonth()+1) + '/' + d.getFullYear();
        this.userInformation['updated'] = u.getDate() +'/'+ Number(u.getMonth()+1) + '/' + u.getFullYear();
      })
    },1000);

  }

  openCaptureModal(){
    const activeModal = this.modalService.open(TakeImgComponent);
  }
  
}

