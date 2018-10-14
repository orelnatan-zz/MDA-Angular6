import { Http, } from '@angular/http';
import { Injectable, }  from '@angular/core';
import { Observable } from 'rxjs/Rx'; //Use: npm install rxjs-compat
import { environment } from '../../environments/environment';
import { Accident } from '../models/accident.model';

@Injectable()
export class Accidents {

    accidents: Array<Accident> = [];

    constructor(private http: Http){}

    getAccidents(): Observable<Accident[]> {
        return this.accidents.length ? new Observable((observer) => {
                observer.next(this.accidents);
                observer.complete();
        }) : this.http.get(environment.apis.accidents).map((response: any) => {
                let data = response.json().Data;
                this.accidents = data;
                return data;
        }).catch(this._handleError);
    }

    _handleError(error: any): Observable<Error>{               //On error, throw exception
        return Observable.throw(error);
    }

}
