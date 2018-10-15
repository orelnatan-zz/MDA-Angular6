import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, } from '@angular/http';             
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './modules/routing.module';
import { NgxGoogleMapModule } from 'ngx-google-map';

import { UtcToIdt } from './pipes/utcToIdt';
import { Accidents } from '../app/services/accidents.service';

import { AppRoot } from './appRoot.component';
import { Home } from './pages/home';
import { SingleAccident } from './pages/singleAccident'; 
import { AccidentsList } from './core/accidentsList';
import { InjuriesList } from './core/injuriesList';
import { InjuryBox } from './core/injuriesList/components/injuryBox';
import { AccidentsHeader } from './core/accidentsList/components/accidentsHeader';
import { AccidentRow } from './core/accidentsList/components/accidentRow';
import { Loader } from './core/loader'
import { LocationView } from './core/locationView';
import { GoogleMaps } from './core/googleMaps';
import { Header } from './common/header';
import { SubHeader } from './common/subHeader';
import { ErrorAlert } from './common/errorAlert';


@NgModule({
  declarations: [
    AppRoot,
    Home,
    AccidentsList,
    AccidentsHeader,
    Header,
    SubHeader,
    AccidentRow,
    UtcToIdt,
    Loader,
    SingleAccident,
    GoogleMaps,
    LocationView,
    InjuriesList,
    InjuryBox,
    ErrorAlert
  ],

  imports: [ BrowserModule, 
             HttpModule, 
             JsonpModule, 
             ReactiveFormsModule, 
             RoutingModule,
             NgxGoogleMapModule
            ],

  providers: [Accidents, ],

  bootstrap: [AppRoot, ]
})
export class AppModule { }
