import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionService {

  constructor() {
    console.log('ChangeDetectionService created');
  }

  logMessage(message: string) {
    console.log(message);
  }
}
