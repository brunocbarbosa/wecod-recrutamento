import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public lista_usuarios = new Array<any>()

  public currentUser: any

  constructor(private service: UserListService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(data => {
                this.lista_usuarios = data.results
      },error =>{
        if(!alert('Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.')){window.location.reload();}
      }
      );
  }
  
}
