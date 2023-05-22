import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { Resultado } from '../model/resultado';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: 'fit-content',
        stroke: '#56C596'
      })),
      state('closed', style({
        height: '0px',

      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],

})

export class FileUploadComponent {

  files:any[]=[];
  selectedFile: File | null = null;
  resultados: Resultado | undefined;// Definir la propiedad rocCurveImage
  isOpen = true;


  constructor(private http: HttpClient) { }

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

      this.http.post<any>('http://localhost:8000/api/upload/', uploadData).subscribe(
        response => {
          this.resultados = response;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
