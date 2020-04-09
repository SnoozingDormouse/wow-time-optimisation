import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { IBFAFlyingState, selectBFAFlyingState, BFAFlyingActionLabels, loadCharacterSteps } from './state/bfa-flying.state.index';
import { map } from 'rxjs/internal/operators';
import { SetUIStateAction, IUIState } from 'src/app/state/ui-state/ui.state.index';
import { BFAFlyingStateEffects } from './state/bfa-flying.state.effects';
import { ICharacter } from 'src/app/characters/state/i-character-state';
import { selectActiveCharactersState } from 'src/app/characters/state/character-state.index';
import { AchievementViewModel, IAchievementViewModel } from './bfa-flying.viewmodel';
import { IconDefinition, faCheckCircle } from '@fortawesome/free-solid-svg-icons';



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
    public dataSource: IAchievementViewModel;

    public faCheckCircle: IconDefinition = faCheckCircle;

    constructor(private store: Store<IApplicationState>,
        private viewModel: AchievementViewModel,
        private bfaEffects: BFAFlyingStateEffects)  {

        this.observer = {
            next: (state: IBFAFlyingState) => {
                this.dataSource = this.viewModel.populateViewModel(state);
                console.log(this.dataSource);
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

        this.store.dispatch({ type: BFAFlyingActionLabels.loadAchievements });

        this.characters.filter(c => c.active).forEach(character => {
            this.store.dispatch( loadCharacterSteps( { character }));
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.menuOpenSubscription.unsubscribe();
    }
}
