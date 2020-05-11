import { Component, OnInit, Output } from '@angular/core';
import { CardService } from '@app/services/card.service';
import { GlobalCardService } from '@app/services/global-card.service';
import { Card } from '@app/models/templates/card';
import { SelectedCardService } from '@app/services/selected-card.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'apo-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
  providers: [
    CardService,
    GlobalCardService,
  ]
})
export class ListCardComponent implements OnInit {
  @Output() cardSelected: Subject<Card> = new Subject();

  listCards: Card[] = [];

  constructor(
    private cardService: CardService,
    private globalCardService: GlobalCardService,
    // private selectedCardService: SelectedCardService,
  ) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    const callCards = new Promise((resolve, reject) => {
      this.cardService.getFibonacciSecuence().subscribe(
        response => {
          this.listCards.push(...response.content.map(
            item => {
              return {
                isGlobal: false,
                item,
              } as Card;
            }
          ));
          resolve();
        }
      );
    });
    callCards.then(_ => {
      this.globalCardService.getGlobalSecuence().subscribe(
        response => {
          this.listCards.push(...response.content.map(
            item => {
              return {
                isGlobal: true,
                item,
              } as Card;
            }
          ));
        }
      );
    });
  }

  selectedCard(card: Card) {
    this.cardSelected.next(card);
    // this.selectedCardService.selectedCard(card);
  }
}
