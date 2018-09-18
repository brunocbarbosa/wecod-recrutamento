import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private readonly API = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API}?results=20&inc=name,email,phone,id,picture&noinfo`)
    .pipe(tap(console.log))
  }

  getUserById(id: string){
    return this.http.get(`${this.API}?id=${id}`)
  }
}
