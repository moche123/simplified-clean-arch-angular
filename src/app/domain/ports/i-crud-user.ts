import { Observable } from "rxjs";
import { IPostUserDTO, IPutUserDTO, IUser } from "../models/User.interface";


export interface ICrudUser{

    users: IUser[];
    choosedUser: IUser;

    getSingleUser(id:number): Observable<void>;
    postUser(user:IPostUserDTO): Observable<void>;
    putUser(id:number, user: IPutUserDTO): Observable<void>;
    deleteUser(id: number): Observable<void>;
}