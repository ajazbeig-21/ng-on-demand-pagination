import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(pageNumber:number,pageSize:number)
  {
    return this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${pageNumber}&size=${pageSize}`);
  }
}
