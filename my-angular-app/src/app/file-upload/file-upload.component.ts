import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
interface Image {
  name: string;
  data: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({

      })),
      state('closed', style({
        display: 'none',

      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('bigSmall',[
      state('small', style({
        display: 'none'
      })),
      state('big', style({
        float: 'right',
        width: '1042px',
        height: '701px'

      })),
      transition('small => big', [
        animate('2s')
      ]),
      transition('big => small', [
        animate('1s')
      ]),
    ])
  ],

})

export class FileUploadComponent {

  files:any[]=[];
  allImages: Image[] = [];
  isOpen = true;
  isBig = true;
  zoomImage!: Image;



  constructor(private http: HttpClient, private api: ApiService) { }

  onFileSelected(event: any) {
    //Cargo el archivo
    this.files.push(...event.addedFiles)
    console.log("file", this.files[0])
  }
  onRemove(event:any){
    this.files.splice(this.files.indexOf(event),1);
  }

  onUpload() {
    this.isOpen = !this.isOpen;
    if (this.files[0]) {
      const uploadData = new FormData();
      uploadData.append('file', this.files[0], this.files[0].name);

      this.api.uploadFile(uploadData).subscribe(
        response => {
          this.allImages = response.images as Image[];
        },
        error => {
          console.log(error);
        }
      );

    }

  }

  openUp(image: Image){
    if(!this.isBig){
      this.isBig=true
      this.zoomImage=image
    }else{
      this.isBig=false
    }
  }
}
