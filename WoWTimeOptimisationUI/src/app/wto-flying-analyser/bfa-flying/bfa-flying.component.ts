import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { IBFAFlyingState, selectBFAFlyingState, BFAFlyingActionLabels, loadCharacterSteps } from './state/bfa-flying.state.index';
import { map } from 'rxjs/internal/operators';
import { IBFAFlyingViewModel, BFAFlyingViewModel } from './bfa-flying.viewmodel';
import { SetUIStateAction, IUIState } from 'src/app/state/ui-state/ui.state.index';
import { BFAFlyingStateEffects } from './state/bfa-flying.state.effects';
import { ICharacter, ICharacterState } from 'src/app/characters/state/i-character-state';
import { selectCharacterState, selectActiveCharactersState } from 'src/app/characters/state/character-state.index';


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
    private characterSubscription;

    private observer: Observer<any>;
    private characters: ICharacter[];

    public displayedColumns: string[];
    public dataSource: IBFAFlyingViewModel;

    constructor(private store: Store<IApplicationState>,
        private viewModel: BFAFlyingViewModel,
        private bfaEffects: BFAFlyingStateEffects)  {

        this.observer = {
            next: (state: IBFAFlyingState) => {
                this.dataSource = this.viewModel.populateViewModel(state.steps, state.characterSteps);
                this.displayedColumns = ['criteria'];
                this.dataSource.headers.forEach(h => this.displayedColumns.push(h));

                //console.log(this.dataSource);
                //console.log(this.displayedColumns);
            },
            error: (err: any) => {},
            complete: () => {}
        };
    }

    ngOnInit() {
        this.menuOpenSubscription = this.store.select(a => a.uiState.isMenuOpen).subscribe(v => { this.isMenuOpen = v } );
        this.characterSubscription =
            this.store.pipe(map(state => selectActiveCharactersState(state))).subscribe(v => { this.characters = v.characters })
        this.subscription = this.store.pipe(map(state => selectBFAFlyingState(state))).subscribe(this.observer);

        this.title = 'Battle for Azeroth Flying';
        const uiState: IUIState = { title: this.title, isMenuOpen: this.isMenuOpen };
        this.store.dispatch( new SetUIStateAction(uiState));

        this.store.dispatch({ type: BFAFlyingActionLabels.loadCriteriaSteps });

        this.characters.filter(c => c.active).forEach(character => {
            this.store.dispatch( loadCharacterSteps( { character }));
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.menuOpenSubscription.unsubscribe();
    }
}
