export interface IUser {
  id?: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  picture?: string;
  cover?: string;
  followers?: IUser[];
  following?: IUser[];
  isPrivate?: number;
}

export interface IAccount extends IUser {
  posts: IPost[];
  connection: { followsMe: boolean; following: boolean; requested: boolean };
}

export interface IResponse {
  status: string;
  message?: string;
  user?: IUser;
  payload?: unknown;
}

export type PartialUser = Partial<IUser>;

export interface IContext {
  account: IUser;
  setAccount: (obj: IUser) => void;
}

export interface IPost {
  id: number;
  title: string;
  picture: string;
  likes: IUser[];
  isLiked: boolean;
}

export interface IChange {
  old?: string;
  newpwd?: string;
  password?: string;
  login?: string;
}
