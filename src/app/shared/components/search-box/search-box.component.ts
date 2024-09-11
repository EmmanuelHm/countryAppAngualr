import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSubscription?: Subscription;
  
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';
  
  // Metodo de evento de salida
  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  //Al crear Componente
  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(400)
    )
    .subscribe( value => {
      // console.log( 'Debouncer value: ', value );
      this.onDebounce.emit( value )
    });
  }

  // Al Destruir Componente
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }


  public emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
  }

}
