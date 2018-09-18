import { Routes } from '@angular/router'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

export const ROUTES: Routes = [
    {path: '', component: UserListComponent},
    {path: 'detail/:id', component: UserDetailComponent}
]