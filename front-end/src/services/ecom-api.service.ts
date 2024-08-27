import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ApiEndPoints from '../environment/ecom-environment.default';
import { UserAccessResponse } from 'src/common-interfaces/ecom-api.types';

@Injectable({
  providedIn: 'root',
})
export class EcomApiService {
  backendUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {}

  checkUserAccess(userName: string, email: string, contactNumber: string) {
    let body = {
      userName: userName,
      email: email,
      contactNumber: contactNumber,
    };
    return this.http.post<UserAccessResponse>(
      this.backendUrl + ApiEndPoints.apiEndPoints.checkUserAccess,
      body,
      {}
    );
  }
}
