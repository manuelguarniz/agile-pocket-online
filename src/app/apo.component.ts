import { Component } from '@angular/core';
import { Utils } from './utils/utils';

@Component({
  selector: 'apo-root',
  templateUrl: './apo.component.html',
  styleUrls: ['./apo.component.css']
})
export class ApoComponent {
  title = 'agile-pocket-online';
  backTop() {
    Utils.scrollToTop(100);
  }
}
