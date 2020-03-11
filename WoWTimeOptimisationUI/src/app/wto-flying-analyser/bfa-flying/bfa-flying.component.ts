import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { IBFAFlyingState, selectBFAFlyingState } from './state/bfa-flying.state.index';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-bfa-flying',
  templateUrl: './bfa-flying.component.html',
  styleUrls: ['./bfa-flying.component.css']
})
export class BfaFlyingComponent implements OnInit, OnDestroy {
    panelOpenState = false;
    private subscription;
    private observer: Observer<any>;

    constructor(private store: Store<IApplicationState>)  {

        this.observer = {
            next: (state: IBFAFlyingState) => {
                //this.isRotating = JSON.parse(state.isLoadingData);
            },
            error: (err: any) => {},
            complete: () => {}
        };
    }

    ngOnInit() {
        this.subscription = this.store.pipe(map(state => selectBFAFlyingState(state))).subscribe(this.observer);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
