import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService } from './settings/setting.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    SettingService,
  ],
})
export class CoreModule {}
