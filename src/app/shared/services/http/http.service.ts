import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public get<T>(apiUrl: string, headers?: HttpHeaders) {
    return new Promise<T>((resolve, reject) => {
      this.http
        .get(apiUrl, { headers: headers })
        .subscribe(
          (res) => resolve(res as T),
          error => reject(error));
    });
  }

  public getBody<T>(apiUrl: string, body: any, headers: HttpHeaders) {
    return new Promise<T>((resolve, reject) => {
      this.http
        .get(apiUrl, { headers: headers, params: body })
        .subscribe(
          (res) => resolve(res as T),
          error => reject(error));
    });
  }

  public post<T>(apiUrl: string, body: any, headers: HttpHeaders) {
    return new Promise<T>((resolve, reject) => {
      this.http
        .post(apiUrl, body, { headers: headers })
        .subscribe(
          (res) => resolve(res as T),
          error => reject(error));
    });
  }

  public put<T>(apiUrl: string, body: any, headers: HttpHeaders) {
    return new Promise<T>((resolve, reject) => {
      this.http
        .put(apiUrl, body, { headers: headers })
        .subscribe(
          (res) => resolve(res as T),
          error => reject(error));
    });
  }

  public delete(apiUrl: string, headers: HttpHeaders) {
    return new Promise<boolean>((resolve, reject) => {
      this.http
        .delete(apiUrl, { headers: headers })
        .subscribe(
          () => resolve(true),
          error => reject(error));
    });
  }
}
