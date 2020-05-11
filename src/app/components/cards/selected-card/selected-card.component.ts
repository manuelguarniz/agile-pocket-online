import { Component, OnInit, ViewChild, ElementRef, Input, Output } from '@angular/core';
import { SelectedCardService } from '@app/services/selected-card.service';
import { Card } from '@app/models/templates/card';
import { Utils } from '@app/utils/utils';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'apo-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.css'],
  providers: [
  ]
})
export class SelectedCardComponent implements OnInit {
  @Input() cardSelectedObserver: Observable<Card>;
  @Output() closeCardSelected: Subject<boolean> = new Subject();

  cardSelected: Card;
  cardShowed: Card;

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
      'agile-card-selected': true,
      'm-1': true,
      'content-default-spaicing': true,
      'content-spaicing': false,
      'animation-card': false,
    };
    if (card && !card.isGlobal) {
      classCard['content-spaicing'] = true;
      classCard['content-default-spaicing'] = false;
      classCard['animation-card'] = true;
    }
    return classCard;
  }

  clicketCard() {
    if (this.cardSelected) {
      if (!this.cardShowed) {
        this.cardShowed = this.cardSelected;
      } else {
        this.closeCardSelected.next(true);
      }
    }
  }
}
