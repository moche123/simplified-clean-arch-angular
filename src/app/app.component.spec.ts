import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ICrudUser } from './domain/ports/i-crud-user';

describe('AppComponent', () => {
  let app: AppComponent;

  const mockCrudUser = {
    getSingleUser: jasmine.createSpy('getSingleUser').and.returnValue(of({})),
    postUser: jasmine.createSpy('postUser').and.returnValue(of([])),
    putUser: jasmine.createSpy('putUser'),
    deleteUser: jasmine.createSpy('deleteUser')
  }

  beforeEach(() =>{
      app = new AppComponent(
        <ICrudUser>(<unknown>mockCrudUser)
      )
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should test ngOnInit', () => {
    app.ngOnInit();
    expect(mockCrudUser.getSingleUser).toHaveBeenCalled();
  });

  it('should test addUser', () => {
    app.addUser();
    expect(mockCrudUser.postUser).toHaveBeenCalled();
  });

});
