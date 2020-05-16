import { Component, OnInit } from '@angular/core';
import { Utils } from '@app/utils/utils';

@Component({
  selector: 'apo-top-page',
  template: `
    <div class="circle-top" (click)="backTop()">
      <i class="fas fa-arrow-up fa-2x align-center-arrow"></i>
    </div>
  `,
  styles: [
    `.circle-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #ffffff;
      color: rgb(42, 78, 92);
      width: 3rem;
      height: 3rem;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      text-align: center;
      line-height: 2.6rem;
      cursor: pointer;
    }`,
    `.align-center-arrow {
      vertical-align: middle;
    }`,
  ]
})
export class TopPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  backTop() {
    Utils.scrollToTop(100);
  }
}
