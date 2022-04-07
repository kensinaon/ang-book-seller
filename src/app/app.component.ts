import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './models/role.enum';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-book-seller';

  currentUser: User = new User;

  constructor(private authenthicationService: AuthenticationService, private router: Router){
    this.authenthicationService.currentUser.subscribe(date => {
      this.currentUser = date;
    });
  }

  isAdmin(){
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut(){
    this.authenthicationService.logOut();
    this.router.navigate(['/login']);
  }

}
