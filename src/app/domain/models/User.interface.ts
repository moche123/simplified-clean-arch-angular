export interface IUser {
  id: number;
  name: string;
  email: string;
}

export type IPostUserDTO = Omit<IUser, 'id'>;
export type IPutUserDTO = IUser;
export type IPatchUserDTO = Partial<IUser> & Pick<IUser, 'id'>;
export type IDeleteUserDTO = Pick<IUser, 'id'>;

// export type IDeleteUserDTOV2 = Pick<IUser, 'id'>;

