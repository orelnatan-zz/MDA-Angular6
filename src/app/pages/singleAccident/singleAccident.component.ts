import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Accidents } from '../../services/accidents.service';
import { Injury } from '../../models/injury.modal';
import { Accident } from '../../models/accident.model';
import { Location } from '../../models/location.modal';
import { Loader } from '../../core/loader';
import { ErrorAlert } from '../../common/errorAlert';

@Component({
  selector: 'single-accident',
  templateUrl: './singleAccident.component.html',
  styleUrls: ['./singleAccident.component.scss']
})

export class SingleAccident implements OnInit {

    @ViewChild('loaderRef') loader: Loader;

    injuries: Array<Injury>;
    location: Location;
    mda: string;
    renderPage: boolean;

    constructor(private router: Router,
                private accidents: Accidents,
                private route: ActivatedRoute){
    }

    ngOnInit(){
        this.loader.activateSpinner();
        this.route.queryParams.subscribe(params => {
            let mda: string = params.mda;

            this.accidents.getAccidents().subscribe((response: Accident[]) => {

                this.loader.switchOffSpinner();

                if(response.map(accident => accident['MDA']).indexOf(mda) == -1){
                    this.renderPage = false;
                    return;
                }

                this.renderPage = true;
                let accident: Accident = response.find(accident => accident['MDA'] == mda);

                this.injuries = accident.injuries;
                this.location = accident.gps;
                this.mda = ' ' + accident['MDA'];
            }, (response) => {
              console.log('Error', response);

              this.renderPage = false;
              this.loader.switchOffSpinner();
            });
        });
    }

    navigateToHomePage(): void {
        this.router.navigate(['/Home']);
    }

}
