import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as ApiEndPoints from '../environment/ecom-environment.default';
import {
  GetPhoneInfoResponse,
  GetPlansResponse,
  NewUserResponse,
  UserAccessResponse,
} from 'src/common-interfaces/ecom-api.types';

@Injectable({
  providedIn: 'root',
})
export class EcomApiService {
  backendUrl = 'http://localhost:3000';
  backendPhonesUrl = 'http://localhost:3001';
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
      this.backendUrl + ApiEndPoints.apiEndPoints.createNewUser,
      body,
      {}
    );
  }

  getPhonesInfo() {
    return this.http.get<GetPhoneInfoResponse>(
      this.backendPhonesUrl + ApiEndPoints.apiEndPoints.getPhoneInfo,
      {}
    );
  }

  getPlans(selectedSim: string) {
    return this.http.get<GetPlansResponse>(
      this.backendPhonesUrl + ApiEndPoints.apiEndPoints.getPlans,
      {
        params: {
          sim: selectedSim,
        },
      }
    );
  }
}
