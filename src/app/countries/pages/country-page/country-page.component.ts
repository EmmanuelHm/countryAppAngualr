import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  // Constructor
  constructor(
    private activatedRoute: ActivatedRoute,  //Para Obtener datos del url
    private router: Router, // Hacer navegación
    private countriesService: CountriesService,
  ){}

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( country => {
        
        if( !country )  return this.router.navigateByUrl('');
        return this.country = country;
        
      });

  }

}
