import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSync, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { SetAPIIsLoadingDataAction, IAPIState, selectAPIState } from 'src/app/state/api-state/api-state.index';
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
    private observer: Observer<any>;

    constructor(private store: Store<IApplicationState>)  {

        this.observer = {
            next: (state: IAPIState) => {
                this.isRotating = JSON.parse(state.isLoadingData);
            },
            error: (err: any) => {},
            complete: () => {}
        };
    }

    ngOnInit() {
        this.subscription = this.store.pipe(map(state => selectAPIState(state))).subscribe(this.observer);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    toggleRotation() {
        this.store.dispatch( new SetAPIIsLoadingDataAction(JSON.stringify(!this.isRotating)));
    }
}
