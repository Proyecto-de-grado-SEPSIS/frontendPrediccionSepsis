import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';

  constructor(private router: Router, private keycloakService: KeycloakService) { }

  irAlDashboard(){
    this.router.navigateByUrl('/dashboard');
  }
  irAlHome(){
    this.router.navigateByUrl('/home');
  }
  irAlAboutUs(){
    this.router.navigateByUrl('/about-us');
  }

  logOut(){
    this.keycloakService.clearToken();
    this.keycloakService.logout("http://localhost:4200/");
  }

}
