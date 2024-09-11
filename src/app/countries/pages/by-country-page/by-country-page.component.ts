import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit{

  // Atributtes
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = ''; 

  // Constructor
  constructor(
    private countriesService: CountriesService,
  ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  // Methods 
  public searchCountry( country: string ): void {

    this.isLoading = true;

    this.countriesService.searchCountry(country)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
    });
  }


}
