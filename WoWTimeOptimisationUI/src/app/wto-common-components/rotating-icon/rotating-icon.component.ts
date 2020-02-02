import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSync, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { SetAPIIsLoadingDataAction, APIState, IAPIState } from 'src/app/state/api-state/api-state.index';
import { IApplicationState } from 'src/app/state/i-application-state';

@Component({
    selector: 'common-component-rotating-icon',
    templateUrl: './rotating-icon.component.html',
    styleUrls: ['./rotating-icon.component.css']
})
export class RotatingIconComponent implements OnInit, OnDestroy {

    public faSync: IconDefinition = faSync;
    public isRotating = false;
    private subscription;
    private observer: Observer<IApplicationState>;

    constructor(private store: Store<IApplicationState>)  {

        this.observer = {
            next: (state: any) => {
                this.isRotating = JSON.parse(state.applicationState.apiState.isLoadingData);
                console.log(this.isRotating);
            },
            error: (err: any) => {},
            complete: () => {}
        };
    }

    private isToggled: boolean;

    ngOnInit() {
        this.subscription = this.store.subscribe(this.observer);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    toggleRotation() {
        this.store.dispatch( new SetAPIIsLoadingDataAction(JSON.stringify(!this.isRotating)));
    }
}
