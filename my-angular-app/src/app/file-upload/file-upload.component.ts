import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {

  selectedFile: File | null = null;
  rocCurveImage: string | null = null;  // Definir la propiedad rocCurveImage

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
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
}
