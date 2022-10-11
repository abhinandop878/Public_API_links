import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewPublicData=()=>{
    return this.http.get("https://api.publicapis.org/entries")
  }
}
