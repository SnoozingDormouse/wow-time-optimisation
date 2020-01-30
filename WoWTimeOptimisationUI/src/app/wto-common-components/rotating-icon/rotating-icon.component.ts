import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSync, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable, of, PartialObserver } from 'rxjs';

@Component({
    selector: 'common-component-rotating-icon',
    templateUrl: './rotating-icon.component.html',
    styleUrls: ['./rotating-icon.component.css']
})
export class RotatingIconComponent implements OnInit, OnDestroy {

    public isRotating: boolean;
    public isRotatingSubscription;

    public faSync: IconDefinition = faSync;

    constructor(
        //private isRotatingObservable$: Observable<boolean>
    ) { }

    ngOnInit() {
        //this.isRotatingSubscription = this.isRotatingObservable$.subscribe(x => { this.isRotating = x; });
    }

    ngOnDestroy() {
        //this.isRotatingSubscription.unsubscribe();
    }

    toggleRotation() {
        // will export it
        // container will pick up and dispatch to the relevant store component
        this.isRotating = !(this.isRotating);
    }
}
