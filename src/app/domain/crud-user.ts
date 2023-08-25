import { Inject, Injectable } from '@angular/core';
import { ICrudUser } from './ports/i-crud-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  IPostUserDTO,
  IPutUserDTO,
  IUser,
} from './models/User.interface';
import { IManageCrud } from './ports/i-manage.crud';

@Injectable()
export class CrudUser implements ICrudUser {
  public users: IUser[] = [
    {
      id: 0,
      name: 'Carlos',
      email: 'carlos@email.com'
    },
    {
      id: 1,
      name: 'Alonso',
      email: 'alonso@email.com'
    }
  ];
  public choosedUser: IUser = this.users[0];

  constructor(@Inject('IManageCrud') private _manageCrud: IManageCrud) {}

  getSingleUser(id:number): Observable<void> {
   
    return this._manageCrud.getSingleApiUser(id,this.users).pipe(
      map((user) => {
        this.choosedUser = user
      })
    );

  }
  postUser(userDTO: IPostUserDTO): Observable<void> {
    return this._manageCrud.postApiUser(userDTO, this.users).pipe(
        map((users) => {
          
          this.users = users;
        })
      );
  }
  putUser(id:number, userDto: IPutUserDTO): Observable<void> {
    return this._manageCrud.putApiUser(id,userDto,this.users).pipe(
      map( users =>{
        this.users = users
      })
    )
  }
  deleteUser(id: number): Observable<void> {
    return this._manageCrud.deleteApiUser(id,this.users).pipe(
      map( users =>{
        this.users = users
      })
    )
  }
}
