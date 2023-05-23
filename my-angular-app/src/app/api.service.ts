import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.BASE_URL}upload/`, formData);
  }

}
