import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

  public currentYear: string;

  constructor() {
    this.setCurrentYear();
  }

  private setCurrentYear() {
    this.currentYear = (new Date()).getFullYear().toString();
  }
}
