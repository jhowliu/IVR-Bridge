import { Component, OnInit } from '@angular/core';

// services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private username: String;
  private identifier: String;
  private service: String;
  private date: String;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  private onSubmit() {
    const user = {
      username: this.username,
      identifier: this.identifier,
      service: this.service,
      date: this.date,
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log(data)
      } else {
        console.log("something wrong")
      }
    })
  }

}
