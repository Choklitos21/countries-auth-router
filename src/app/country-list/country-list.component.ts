import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../services/countries.service";
import {Country} from "../interfaces/countries.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countryArray: {name: string, capital:string}[] = []

  newCountry = {
    name: 'Canadá',
    capital: 'Ottawa'
  }

  flag: boolean = false;

  countries: Country[] = [];

  constructor(
    private countryService: CountriesService
  ) { }

  ngOnInit(): void {
    console.log(this.newCountry);
    this.newCountry.name = 'Italia';
    this.newCountry.capital = 'Roma';

    this.countryService.getCountries()
      .subscribe({
        next: data => this.countries = data
      })
  }

  saveCountry(value: any) {
    this.newCountry.name = value.name;
    this.newCountry.capital = value.capital + ' City';
    let data = {
      name: this.newCountry.name,
      capital: this.newCountry.capital
    }
    console.log(this.newCountry);

    this.countryArray.push(data);
    this.newCountry.name = '';
    this.newCountry.capital = '';

  }

  auth() {
    this.flag = true;
  }

  logOut() {
    this.flag = false;
  }

}
