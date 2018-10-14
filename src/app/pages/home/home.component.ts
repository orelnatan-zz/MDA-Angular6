import { Component, ViewChild } from '@angular/core';
import { Accidents } from '../../services/accidents.service';
import { Accident } from '../../models/accident.model';
import { Router }  from    '@angular/router';
import { Loader } from '../../core/loader';
import { ErrorAlert } from 'src/app/common/errorAlert/errorAlert.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class Home {

    @ViewChild('loaderRef') loader: Loader;
    @ViewChild('alertRef') alert: ErrorAlert;

    treatedAccidents: Array<Accident> = [];
    nonTreatedAccidents: Array<Accident> = [];
    renderPage: boolean;

    constructor(private accidents: Accidents,
                private router: Router){}

    ngOnInit(){
        this.loader.activateSpinner();
        
        this.accidents.getAccidents().subscribe((response: Accident[]) => {
            this.loader.switchOffSpinner();
            this.renderPage = true;
            console.log(JSON.parse(JSON.stringify(response)));                      //Origin response...
            this.treatedAccidents = response.filter(item => (item.isTreated));
            this.nonTreatedAccidents = response.filter(item => (!item.isTreated));
        }, (response) => {
            console.log(response);
            this.alert.showAlert();
        });  
    }

    navigateToAccidentPage(mda: string): void{
        this.router.navigate(['/Single-Accident'], {queryParams: { mda: mda }});
    }

    

}