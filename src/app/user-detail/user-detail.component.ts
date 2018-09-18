import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { UserListService } from '../user-list/user-list.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  currentUser: any;

  constructor(private userListService: UserListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userListService.getUserById(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.currentUser = data['results'][0];
        console.log(this.currentUser)
      },error =>{
        if(!alert('Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.')){window.location.reload();}
      })
  }

}
