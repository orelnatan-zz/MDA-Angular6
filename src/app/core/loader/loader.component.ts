import { Component } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class Loader {
  
    isActive: boolean = false;

    activateSpinner(): void{
        this.isActive = true;
    }

    switchOffSpinner(): void{
        this.isActive = false;
    }
}