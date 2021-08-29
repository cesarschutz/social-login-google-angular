import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public socialAuthServive: SocialAuthService) { }

  ngOnInit() {
    console.log(this.socialAuthServive);
  }

}
