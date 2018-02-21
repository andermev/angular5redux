import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';

import { DeviceService } from './services/device.service';
import { DeviceEffects } from './effects/deviceEffects';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DeviceEffects])
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
