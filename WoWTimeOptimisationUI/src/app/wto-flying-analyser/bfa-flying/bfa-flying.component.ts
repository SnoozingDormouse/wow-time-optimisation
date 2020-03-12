import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { IBFAFlyingState, selectBFAFlyingState, IStep } from './state/bfa-flying.state.index';
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
    public steps: IStep[];

    constructor(private store: Store<IApplicationState>)  {

        this.observer = {
            next: (state: IBFAFlyingState) => {
                this.steps = state.steps;
            },
            error: (err: any) => {},
            complete: () => {}
        };
    }

    ngOnInit() {
        this.subscription = this.store.pipe(map(state => selectBFAFlyingState(state))).subscribe(this.observer);
        console.log('steps');
        console.log(this.steps);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
