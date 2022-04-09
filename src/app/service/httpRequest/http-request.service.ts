import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

export enum HttpVerbs {
  Get,
  Post,
  Put,
  Delete,
}

export class RequestOptionsModel {
  headers: HttpHeaders;
  params?: HttpParams;
}


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) { }

  private httpOptionsHandler(
    options: RequestOptionsModel,
    httpVerbs: HttpVerbs,
  ) {
    if (!options) options = { headers: new HttpHeaders() };

    switch (httpVerbs) {
      case HttpVerbs.Get:
      case HttpVerbs.Post:
      case HttpVerbs.Put:
      case HttpVerbs.Delete: {
        options.headers
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      }
    }
    return options;
  }

  // The any type will be change after all the models had been typed
  getRequest(endPoint: string, options?: RequestOptionsModel): Observable<any> {
    options = this.httpOptionsHandler(options, HttpVerbs.Get);
    return this.httpClient.get(environment.apiURL + endPoint, options);
  }

  postRequest(
    endPoint: string,
    postBody: any,
    options?: RequestOptionsModel
  ): Observable<any> {
    options = this.httpOptionsHandler(options, HttpVerbs.Post);
    return this.httpClient.post(
      environment.apiURL + endPoint,
      postBody,
      options
    );
  }

  putRequest(
    endPoint: string,
    putBody: any,
    options?: RequestOptionsModel
  ): Observable<any> {
    options = this.httpOptionsHandler(options, HttpVerbs.Put);
    return this.httpClient.put(environment.apiURL + endPoint, putBody, options);
  }

  deleteRequest(
    endPoint: string,
    options?: RequestOptionsModel
  ): Observable<any> {
    options = this.httpOptionsHandler(options, HttpVerbs.Delete);
    return this.httpClient.delete(environment.apiURL + endPoint, options);
  }

}
