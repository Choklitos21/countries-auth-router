import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../services/countries.service";
import {Country} from "../interfaces/countries.interface";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];

  constructor(
    private countryService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe({
        next: data => this.countries = data
      })
  }


}
