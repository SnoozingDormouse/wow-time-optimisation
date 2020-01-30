import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSync, IconDefinition } from '@fortawesome/free-solid-svg-icons';
//import { toggleAnimation } from '../state/common-component-state.actions';
//import { Store } from '@ngrx/store';
//import { ICommonComponentState } from '../state/i-common-component-state';
import { Observable, of, PartialObserver } from 'rxjs';

@Component({
    selector: 'common-component-rotating-icon',
    templateUrl: './rotating-icon.component.html',
    styleUrls: ['./rotating-icon.component.css']
})
export class RotatingIconComponent implements OnInit, OnDestroy {

    public isRotatingObservable$: Observable<boolean>;
    public isRotatingObserver: PartialObserver<boolean>;
    public isRotating: boolean;
    public isRotatingSubscription;

    public faSync: IconDefinition = faSync;

    constructor() { }

    ngOnInit() {
        this.isRotating = false;
        this.isRotatingObservable$ = of(false);
        this.isRotatingObserver = {
            next: x => { this.isRotating = x; },
        };

        this.isRotatingSubscription = this.isRotatingObservable$.subscribe(this.isRotatingObserver);
    }

    ngOnDestroy() {
        this.isRotatingSubscription.unsubscribe();
    }

    toggleRotation() {
        this.isRotatingObserver.next(!(this.isRotating));
    }
}
