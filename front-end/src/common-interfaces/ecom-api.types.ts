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
  dateOfBirth: string
}
