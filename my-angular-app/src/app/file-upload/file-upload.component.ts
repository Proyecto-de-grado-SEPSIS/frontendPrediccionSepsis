import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  trigger, state, style, animate, transition } from '@angular/animations';

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
        height: 'fit-content',
        stroke: 'red'
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

  selectedFile: File | null = null;
  rocCurveImage: string | null = null;  // Definir la propiedad rocCurveImage
  isOpen = true;
  fileName: string | undefined;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    //Cargo el archivo 
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile?.name;

    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile, this.selectedFile.name);

      this.http.post<any>('http://localhost:8000/api/upload/', uploadData).subscribe(
        response => {
          this.rocCurveImage = response.rocCurveImage;
        },
        error => {
          console.log(error);
        }
      );
    }

  }

  onUpload() {
    //this.isOpen = !this.isOpen;


  }
}
