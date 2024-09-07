import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  // Constructor
  constructor(
    private countriesService: CountriesService,
  ){}

  // Atributtes
  public countries: Country[] = [];

  // Methods 
  public searchCountry( country: string ): void {
    this.countriesService.searchCountry(country)
      .subscribe( countries => {
        this.countries = countries
    });
  }


}
