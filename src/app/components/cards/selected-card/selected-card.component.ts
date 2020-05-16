import { Component, OnInit, Input, Output } from '@angular/core';
import { Card } from '@app/models/templates/card';
import { Observable, Subject } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'apo-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('400ms ease-out')),
      transition('inactive => active', animate('400ms ease-in'))
    ])
  ]
})
export class SelectedCardComponent implements OnInit {
  @Input() cardSelectedObserver: Observable<Card>;
  @Output() closeCardSelected: Subject<boolean> = new Subject();

  cardSelected: Card;
  cardShowed: Card;
  flip = 'inactive';

  constructor(
  ) { }

  ngOnInit(): void {
    this.onListenerSelectedCard();
  }

  onListenerSelectedCard() {
    this.cardSelectedObserver.subscribe(
      response => {
        this.cardSelected = response;
      }
    );
  }

  showClassCard(card: Card): any {
    const classCard = {
      'content-default-spaicing': true,
      'content-spaicing': false,
    };
    if (card && !card.isGlobal) {
      classCard['content-spaicing'] = true;
      classCard['content-default-spaicing'] = false;
    }
    return classCard;
  }

  clickedCard() {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
    if (this.cardSelected) {
      if (!this.cardShowed) {
        this.cardShowed = this.cardSelected;
      } else {
        this.closeCardAndDestroy();
      }
    }
  }

  private closeCardAndDestroy() {
    this.cardSelected = null;
    this.cardShowed = null;
    this.closeCardSelected.next(true);
  }
}
