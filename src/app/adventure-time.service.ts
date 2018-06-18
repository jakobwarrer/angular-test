import { Injectable } from '@angular/core';
import { CHARACTERS } from './mock-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable()
export class AdventureTimeService {
  constructor() {}
  getCharacters(): Observable<any[]> {
    return of(CHARACTERS).pipe(delay(100));
  }
  getColumns(): string[] {
    return ['name', 'age', 'species', 'occupation'];
  }
}
