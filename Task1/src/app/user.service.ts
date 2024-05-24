import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers(): Observable<User[]> {
    const users: User[] = [
      { name: 'Albert Miguel', email: 'albert.miguel@example.com' },
      { name: 'Jona', email: 'jane.smith@example.com' },
      { name: 'Michael Johnson', email: 'michael.johnson@example.com' },
      { name: 'Emily Ross', email: 'emily.ross@example.com' }
    ];
    return of(users);
  }
}
