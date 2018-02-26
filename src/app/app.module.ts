import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { DeviceComponent } from './device-list/device-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';

import { DeviceService } from './services/device.service';
import { DeviceEffects } from './effects/deviceEffects';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/headers/header.component';
import { PaginationConfig } from './pagination/pagination.config';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from './pagination/pagination/pagination.module';

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
    EffectsModule.forRoot([DeviceEffects]),
    NgbModule.forRoot(),
    PaginationModule
  ],
  providers: [DeviceService, PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
