import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
import { DeviceComponent } from './device-list/device-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';

import { DeviceService } from './services/device.service';
import { DeviceEffects } from './effects/deviceEffects';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/headers/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DeviceEffects])
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
