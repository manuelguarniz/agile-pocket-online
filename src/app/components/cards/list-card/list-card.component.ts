import { Component, OnInit } from '@angular/core';
import { CardService } from '@app/services/card.service';
import { GlobalCardService } from '@app/services/global-card.service';

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

  listCards: string[] = [];

  constructor(
    private cardService: CardService,
    private globalCardService: GlobalCardService,
  ) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    const callCards = new Promise((resolve, reject) => {
      this.cardService.getFibonacciSecuence().subscribe(
        response => {
          this.listCards.push(...response.content);
          resolve();
        }
      );
    });
    callCards.then(_ => {
      this.globalCardService.getGlobalSecuence().subscribe(
        response => {
          this.listCards.push(...response.content);
        }
      );
    })
  }

}
