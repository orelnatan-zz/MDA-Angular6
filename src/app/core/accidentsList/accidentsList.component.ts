import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Accident } from '../../models/accident.model';
import { Loader } from '../loader';

import * as moment from 'moment-timezone';

@Component({
  selector: 'accidents-list',
  templateUrl: './accidentsList.component.html',
  styleUrls: ['./accidentsList.component.scss']
})

export class AccidentsList implements OnChanges {
  
    @Input() accidents: Array<Accident> = [];
    @Output() accidentSelected = new EventEmitter();

    ngOnChanges(){                  
        this.accidents.sort(function (left, right) {    // On data arrival, sort array by date(asc order)
              return moment.utc(right['EventTime']).diff(moment.utc(left['EventTime']))
        });
    }

  
}
