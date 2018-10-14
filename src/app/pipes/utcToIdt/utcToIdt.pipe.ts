import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment-timezone';

@Pipe ({
    name: 'utcToIdt'
 })
 //Use this pipe in order to convert UTC(Coordinated Universal Time) to IDT(Israeli Daylight Time)
 export class UtcToIdt implements PipeTransform {
    transform(date: string) {   
        return moment(date).tz('Asia/Gaza').format('DD/MM/YY HH:mm:ss');
    }
}