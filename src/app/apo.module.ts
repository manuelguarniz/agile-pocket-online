import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApoComponent } from './apo.component';
import { CardsComponent } from './components/cards/cards.component';
import { SelectedCardComponent } from './components/cards/selected-card/selected-card.component';
import { ListCardComponent } from './components/cards/list-card/list-card.component';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    ApoComponent,
    CardsComponent,
    SelectedCardComponent,
    ListCardComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [ApoComponent]
})
export class ApoModule { }
