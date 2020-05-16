import { Component, OnInit } from '@angular/core';
import { Card } from '@app/models/templates/card';
import { Subject } from 'rxjs';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'apo-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('showerHiddenCard', [
      state('_show', style({
        display: 'block',
        opacity: '*'
      })),
      state('_hidden', style({
        display: 'none',
        opacity: 0,
      })),
      transition('_show <=> _hidden', [ animate(500) ]),
    ])
  ],
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
