import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/components/core/setting.service';

@Component({
  selector: 'apo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private settingService: SettingService,
  ) { }

  ngOnInit(): void {
  }

  getCurrentYear(): string {
    return this.settingService.currentYear;
  }

}
