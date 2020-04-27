import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secuence } from '@app/models/cards/secuence';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class GlobalCardService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getGlobalSecuence(): Observable<Secuence> {
    return this.http.get<Secuence>('assets/server/poket-global.json');
  }
}