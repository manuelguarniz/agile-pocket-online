import { Component, OnInit } from '@angular/core';
import { Card } from '@app/models/templates/card';
import { Subject } from 'rxjs';

@Component({
  selector: 'apo-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  emiterCardSelected: Subject<Card> = new Subject();
  activeCardSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  listenerCardSelected(card: Card) {
    if (card) {
      this.activeCardSelected = true;
      // #Hack: espera renderizado para enviar datos
      setTimeout(() => {
        this.emiterCardSelected.next(card);
      }, 0);
    }
  }

  listenerClosedCardSelected(close: boolean) {
    this.activeCardSelected = !close;
  }
}
