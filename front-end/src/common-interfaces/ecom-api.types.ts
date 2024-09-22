export interface UserAccessResponse {
  newUser: boolean;
}

export interface UserDetailsForm {
  email: string;
}

export interface NewUserResponse {
  message: string;
}

export interface NewUserForm {
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface GetPhoneInfoResponse {
  title: string;
  url: string;
  alt: string;
  storage: number;
  ram: number;
  color: string;
  brand: string;
}
