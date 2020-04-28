import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectedCardService } from '@app/services/selected-card.service';
import { Card } from '@app/models/templates/card';
import { Utils } from '@app/utils/utils';

@Component({
  selector: 'apo-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.css'],
  providers: [
  ]
})
export class SelectedCardComponent implements OnInit {
  @ViewChild('cardElement') cardElement: ElementRef<any>;

  cardSelected: Card;

  constructor(
    private selectedCardService: SelectedCardService,
  ) { }

  ngOnInit(): void {
    this.onListenerSelectedCard();
  }

  onListenerSelectedCard() {
    this.selectedCardService.listenerSelectedCard().subscribe(
      response => {
        // Utils.scrollElementToTop(this.cardElement, 100);
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
      this.cardSelected = null;
    }
  }
}
