export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  tracks: any[];
  albums: any[];
  __v: number;
  avatar: string;
}

export interface IRegisterResponse extends ILoginResponse {}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}
export interface IUpdateProfileRequest extends Partial<IRegisterRequest> {
  avatar?: any;
}
export interface ILoginResponse {
  _id: string;
  email: string;
  token: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
