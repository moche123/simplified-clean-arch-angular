import { Observable } from "rxjs";
import { IUser, IPostUserDTO, IPutUserDTO } from "../models/User.interface";


export interface IManageCrud{
    getSingleApiUser(id:number, users: IUser[]): Observable<IUser>;
    postApiUser(user:IPostUserDTO, users: IUser[]): Observable<IUser[]>;
    putApiUser(id:number,userDTO: IPutUserDTO, users: IUser[]): Observable<IUser[]>;
    deleteApiUser(id: number, users: IUser[]): Observable<IUser[]>;
}