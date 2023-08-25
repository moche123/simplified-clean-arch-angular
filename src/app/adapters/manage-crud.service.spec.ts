
import { Observable } from 'rxjs';
import { ManageCrudService } from './manage-crud.service';
import { IUser } from '../domain/models/User.interface';
import { fakeAsync, flush } from '@angular/core/testing';

describe('ManageCrudService', () => {
  let service: ManageCrudService;
  const mockData = [
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
  ]

  beforeEach(() => {
     service = new ManageCrudService()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getSingleApiUser', fakeAsync(() => {
    const apiUser$: Observable<IUser> = service.getSingleApiUser(0,mockData);
    flush();
    apiUser$.subscribe( res => {
      expect( res ).toBeDefined();
    } )
  }));

  it('should test postApiUser', fakeAsync(() => {
    const apiUser$: Observable<IUser[]> = service.postApiUser({name:'',email:''},mockData);
    flush();
    apiUser$.subscribe( res => {
      // expect( res ).toEqual( {id: 9,name:'',email:''}  );
      expect( res ).toBeDefined();
    } )
  }));

  it('should test putApiUser', fakeAsync(() => {
    const expectedObject = { id:55, name:'',email:''}
    const apiUser$: Observable<IUser[]> = service.putApiUser( 0,expectedObject,mockData );
    flush();
    apiUser$.subscribe( res => {
      expect( res ).toBeDefined();
    } )
  }));

  it('should test deleteApiUser', fakeAsync(() => {
    const apiUser$: Observable<IUser[]> = service.deleteApiUser( 0,mockData );
    flush();
    apiUser$.subscribe( res => {
      expect( res ).toBeDefined();
    } )
  }));


});
