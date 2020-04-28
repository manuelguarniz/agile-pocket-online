import { Component, OnInit } from '@angular/core';
import { SelectedCardService } from '@app/services/selected-card.service';
import { Card } from '@app/models/templates/card';

@Component({
  selector: 'apo-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.css'],
  providers: [
  ]
})
export class SelectedCardComponent implements OnInit {

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
        this.cardSelected = response;
      }
    );
  }

}
