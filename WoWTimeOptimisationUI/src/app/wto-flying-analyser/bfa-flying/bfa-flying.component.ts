import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { Observer, Observable } from 'rxjs';
import { IBFAFlyingState, selectBFAFlyingState, IStep, ICharacterStepStatus } from './state/bfa-flying.state.index';
import { map } from 'rxjs/internal/operators';
import { IBFAFlyingViewModel, BFAFlyingViewModel } from './bfa-flying.viewmodel';
import { SetUIStateAction, IUIState } from 'src/app/state/ui-state/ui.state.index';

@Component({
  selector: 'app-bfa-flying',
  templateUrl: './bfa-flying.component.html',
  styleUrls: ['./bfa-flying.component.css']
})
export class BfaFlyingComponent implements OnInit, OnDestroy {
    private title: string;
    private isMenuOpen: boolean;

    private subscription;
    private menuOpenSubscription;
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
        this.menuOpenSubscription = this.store.select(a => a.uiState.isMenuOpen).subscribe(v => { this.isMenuOpen = v } );
        this.subscription = this.store.pipe(map(state => selectBFAFlyingState(state))).subscribe(this.observer);

        this.title = 'Battle for Azeroth Flying';

        const uiState: IUIState = { title: this.title, isMenuOpen: this.isMenuOpen };
        this.store.dispatch( new SetUIStateAction(uiState));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.menuOpenSubscription.unsubscribe();
    }
}
