import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApoComponent } from './apo.component';
import { CardsComponent } from './components/cards/cards.component';
import { SelectedCardComponent } from './components/cards/selected-card/selected-card.component';
import { ListCardComponent } from './components/cards/list-card/list-card.component';
import { RoutesModule } from './routes/routes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './static/footer/footer.component';
import { HeaderComponent } from './static/header/header.component';
import { SettingService } from './components/core/setting.service';

@NgModule({
  declarations: [
    ApoComponent,
    CardsComponent,
    SelectedCardComponent,
    ListCardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    NgbModule,
  ],
  providers: [
    SettingService,
  ],
  bootstrap: [ApoComponent]
})
export class ApoModule { }
