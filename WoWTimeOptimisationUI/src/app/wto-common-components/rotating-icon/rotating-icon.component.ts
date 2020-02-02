import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSync, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IAPIState, setAPIIsLoadingData } from 'src/app/state/api-state/api-state.index';
import { IApplicationState } from 'src/app/state/i-application-state';

@Component({
    selector: 'common-component-rotating-icon',
    templateUrl: './rotating-icon.component.html',
    styleUrls: ['./rotating-icon.component.css']
})
export class RotatingIconComponent implements OnInit, OnDestroy {

    public isRotating = false;
    private subscription;

    public faSync: IconDefinition = faSync;

    constructor(private store: Store<IApplicationState>) { }

    ngOnInit() {
        this.subscription =
            this.store
            .select('APIstate')
            .subscribe( x => {
                const isLoadingData = x && x.isLoadingData ? JSON.parse(x.isLoadingData) : false;
                console.log('x:' + isLoadingData);
                this.isRotating = isLoadingData;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    toggleRotation() {
        const spy = this.isRotating;
        console.log(spy);
        this.store.dispatch( setAPIIsLoadingData( { isLoadingData: JSON.stringify(this.isRotating) } ));
    }
}
