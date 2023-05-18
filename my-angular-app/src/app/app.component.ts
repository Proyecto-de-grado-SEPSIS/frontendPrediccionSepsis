import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';

  constructor(private router: Router) { }

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

  }

}
