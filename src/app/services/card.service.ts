import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secuence } from '@app/models/cards/secuence-fibonacci';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class CardService {

  constructor(
    private http: HttpClient,
  ) { }

  getFibonacciSecuence(): Observable<Secuence> {
    return new Observable((observer: Subscriber<Secuence>) => {
      this.http.get<Secuence>('assets/server/poket-fibonacci.json').subscribe(
        json => {
          observer.next(json);
        }
      );
    });
  }
}
