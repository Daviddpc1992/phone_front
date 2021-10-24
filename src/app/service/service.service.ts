import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../interface/phone'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl: string;

  constructor( private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/api';
  }

  getAll():Promise<Phone[]>{
    return this.httpClient.get<Phone[]>(`${this.baseUrl}/phones`).toPromise();
  }

  getByIdPhone(id:any):Promise<Phone>{
    return this.httpClient.get<Phone>(`${this.baseUrl}/phone/${id}`).toPromise();
  }

  createPhone(newPhone:Phone){
    return this.httpClient.post<Phone>(`${this.baseUrl}/phone`, newPhone).toPromise();
  }

  update(id:number, fd) {
    return this.httpClient.put(`${this.baseUrl}/phone/${id}`, fd).toPromise();
  }

}
