import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-take-img',
  templateUrl: './take-img.component.html',
  styleUrls: ['./take-img.component.css']
})
export class TakeImgComponent implements OnInit {

  showCamera: boolean = true;
  canvasElement: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
  outputContainer: HTMLDivElement;
  outputMessage: HTMLDivElement;
  outputData: HTMLDivElement;
  video: HTMLVideoElement;

  public captures: Array<any>;

  closeResult: string;

  constructor(private activeModal: NgbActiveModal) {
    this.captures = [];
  }

  closeModal() {
    this.activeModal.close();
  }
  public ngOnInit() {
    this.canvasElement = <HTMLCanvasElement> document.getElementById('scan-canvas');
    this.canvasContext = this.canvasElement.getContext('2d');
    this.outputContainer = <HTMLDivElement>document.getElementById('output');
    this.outputMessage = <HTMLDivElement>document.getElementById('outputMessage');
    this.outputData = <HTMLDivElement>document.getElementById('outputData');
    this.video = <HTMLVideoElement>document.createElement('video');
    this.video.setAttribute("id", "video1");
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(async (stream: MediaStream) => {
        this.video.srcObject = stream;
        this.video.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
        await this.video.play();
        requestAnimationFrame(this.tick.bind(this));
    });
    // this.draw();
   }

  public captureImg() {
    this.video.pause();
    var canvas = <HTMLCanvasElement> document.getElementById('scan-canvas');
      var context =  canvas.getContext("2d").drawImage(this.video , 0, 0, 640, 480);
      this.captures.push(canvas.toDataURL("image/png"));
      console.log(this.captures);
  }

  tick(): void {
    if(this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
        this.canvasElement.hidden = false;
        this.outputContainer.hidden = false;
        this.canvasElement.height = this.video.videoHeight;
        this.canvasElement.width = this.video.videoWidth;
        this.canvasContext.drawImage(this.video, 0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    requestAnimationFrame(this.tick.bind(this));
}

refreshImg(){
  this.video.play();
}

readFile(file: File) {
  var preview = document.querySelector('img');
  var reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = (e: any) => {
    console.info(e.target.result);
    const data = e.target.result
    preview.src = reader.result;
  }
}

}