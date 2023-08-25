import { Injectable } from '@angular/core';
import { IManageCrud } from '../domain/ports/i-manage.crud';
import { Observable, of } from 'rxjs';
import { IUser, IPostUserDTO, IPutUserDTO } from '../domain/models/User.interface';

@Injectable()
export class ManageCrudService implements IManageCrud{
  
  getSingleApiUser(id:number, users: IUser[]): Observable<IUser> {
    return of(users[id])
  }
  postApiUser(userDTO: IPostUserDTO, users: IUser[]): Observable<IUser[]> {
    users.push({ id:users.length, ...userDTO  });
    return of( users )
  }
  putApiUser(id: number, userDTO: IPutUserDTO, users:IUser[]): Observable<IUser[]> {
    users[id] = { ...users[id],...userDTO  } 
    return of( users )
  }
  deleteApiUser(id: number, users: IUser[]): Observable<IUser[]> {
    users.splice(id,1);
    return of( users )
  }

 
}
