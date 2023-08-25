import { CrudUser } from "./crud-user";
import { IManageCrud } from "./ports/i-manage.crud";
import { of } from 'rxjs'

describe('CrudUserService', () => {
  let service: CrudUser;
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
  
  const mockManageCrud = {
    getSingleApiUser: jasmine.createSpy('getSingleApiUser'),
    postApiUser: jasmine.createSpy('postApiUser').and.returnValue(of(mockData)),
    putApiUser: jasmine.createSpy('putApiUser').and.returnValue(of(mockData)),
    deleteApiUser: jasmine.createSpy('deleteApiUser').and.returnValue(of(mockData))
  }

  beforeEach(() =>{
    service = new CrudUser(
      <IManageCrud>(<unknown>mockManageCrud)
    )
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getSingleUser', () => {
    mockManageCrud.getSingleApiUser.and.returnValue(of(mockData[0]))
    service.getSingleUser(0).subscribe();
    expect(service.choosedUser).toEqual(mockData[0]);
  });



});
