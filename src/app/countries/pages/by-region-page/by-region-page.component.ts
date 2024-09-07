import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  // Constructor
  constructor(
    private countriesService: CountriesService, 
  ){}

  // Attributes
  public countries: Country[] = []

  // Methods
  public seachRegion( region: string ): void {

    this.countriesService.searchRegion(region)
      .subscribe( countries => {
          this.countries = countries;
    });
  }
}
