import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApoComponent } from './apo.component';
import { CardsComponent } from './components/cards/cards.component';
import { SelectedCardComponent } from './components/cards/selected-card/selected-card.component';
import { ListCardComponent } from './components/cards/list-card/list-card.component';
import { RoutesModule } from './routes/routes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './static/footer/footer.component';
import { HeaderComponent } from './static/header/header.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SelectedCardService } from './services/selected-card.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopPageComponent } from './components/top-page/top-page.component';

@NgModule({
  declarations: [
    ApoComponent,
    CardsComponent,
    SelectedCardComponent,
    ListCardComponent,
    FooterComponent,
    HeaderComponent,
    TopPageComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    NgbModule,
    CoreModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
  ],
  providers: [
    SelectedCardService,
  ],
  bootstrap: [ApoComponent]
})
export class ApoModule { }
