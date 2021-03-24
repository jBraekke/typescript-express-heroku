export interface IUser {
    _id: any;
    firstName: string;
   lastName: string;
   email: string;
   password: string;

  }
  
  export interface IUserProps {
    props: IUser;
  }