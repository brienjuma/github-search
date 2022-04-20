import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-user-bio-information',
  templateUrl: './user-bio-information.component.html',
  styleUrls: ['./user-bio-information.component.css']
})
export class UserBioInformationComponent implements OnInit {
  user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
