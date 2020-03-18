import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { IBFAFlyingState, selectBFAFlyingState, IStep, ICharacterStepStatus } from './state/bfa-flying.state.index';
import { map } from 'rxjs/internal/operators';
import { IBFAFlyingViewModel, BFAFlyingViewModel } from './bfa-flying.viewmodel';

@Component({
  selector: 'app-bfa-flying',
  templateUrl: './bfa-flying.component.html',
  styleUrls: ['./bfa-flying.component.css']
})
export class BfaFlyingComponent implements OnInit, OnDestroy {
    panelOpenState = false;
    private subscription;
    private observer: Observer<any>;

    public displayedColumns: string[];
    public dataSource: IBFAFlyingViewModel;

    constructor(private store: Store<IApplicationState>,
        private viewModel: BFAFlyingViewModel)  {

        this.observer = {
            next: (state: IBFAFlyingState) => {
                this.dataSource = this.viewModel.populateViewModel(state.steps, state.characterSteps);
                this.displayedColumns = ['criteria'];
                this.dataSource.headers.forEach(h => this.displayedColumns.push(h));

                console.log(this.dataSource);
                console.log(this.displayedColumns);
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
