import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Card } from '@app/models/templates/card';

@Injectable()
export class SelectedCardService {

  private listenerCard$: Subject<Card> = new Subject<Card>();

  constructor() {
  }

  selectedCard(value: Card) {
    this.listenerCard$.next(value);
  }
  listenerSelectedCard(): Observable<Card> {
    return this.listenerCard$.asObservable();
  }

}
