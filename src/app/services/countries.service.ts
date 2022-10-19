import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/countries.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all')
  }
}
