import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageCrudService } from './adapters/manage-crud.service';
import { CrudUser } from './domain/crud-user';
import { ICrudUser } from './domain/ports/i-crud-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: 'IManageCrud',
      useClass: ManageCrudService
    },
    {
      provide: 'ICrudUser',
      useClass: CrudUser
    }
  ]
})
export class AppComponent implements OnInit {

  constructor( @Inject('ICrudUser') public _crudUser: ICrudUser ){}

  ngOnInit(){
    this._crudUser.getSingleUser(0).subscribe();
  }

  addUser(){
    this._crudUser.postUser({ name: 'Fabian', email: 'Fabian@gmail.com' }).subscribe()
  }
}
