import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as ApiEndPoints from '../environment/ecom-environment.default';
import {
  NewUserResponse,
  UserAccessResponse,
} from 'src/common-interfaces/ecom-api.types';

@Injectable({
  providedIn: 'root',
})
export class EcomApiService {
  backendUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {}

  checkUserAccess(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.get<UserAccessResponse>(
      this.backendUrl + ApiEndPoints.apiEndPoints.checkUserAccess,
      { params }
    );
  }

  createNewUser(body: any) {
    return this.http.post<NewUserResponse>(
      this.backendUrl + ApiEndPoints.apiEndPoints.newUser,
      body,
      {}
    );
  }
}
