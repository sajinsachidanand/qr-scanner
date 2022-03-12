import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChargerDetail } from './model/ChargerDetail.model';

@Injectable({
  providedIn: 'root'
})
export class ChargerDetailsService {

  constructor(private http: HttpClient) { }

  getChargerInfo(url : string){
    return this.http.get<ChargerDetail>(url);
  }


}
