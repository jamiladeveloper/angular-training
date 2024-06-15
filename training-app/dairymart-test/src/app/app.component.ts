import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dairymart-test';

  constructor(private userService : UserserviceService, private router : Router) { }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
