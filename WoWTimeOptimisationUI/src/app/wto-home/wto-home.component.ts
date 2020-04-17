import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICharacter } from '../characters/state/i-character-state';
import { Store } from '@ngrx/store';
import { IApplicationState } from '../state/i-application-state';
import { map } from 'rxjs/internal/operators';
import { selectActiveCharactersState, toggleCharacterActive, selectCharactersState } from '../characters/state/character-state.index';
import { IconDefinition, faCheckCircle, faBan } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-wto-home',
  templateUrl: './wto-home.component.html',
  styleUrls: ['./wto-home.component.css']
})
export class WtoHomeComponent implements OnInit, OnDestroy {
    characters: ICharacter[];
    private characterSubscription;

    public faCheckCircle: IconDefinition = faCheckCircle;
    public faBan: IconDefinition = faBan;

    constructor(private store: Store<IApplicationState>) { }

    ngOnInit(): void {
        this.characterSubscription =
            this.store.pipe(map(state => selectCharactersState(state))).subscribe(v => { this.characters = v.characters })
    }

    ngOnDestroy(): void {
        this.characterSubscription.unsubscribe();
    }

    toggleActive(character: ICharacter): void {
        this.store.dispatch( toggleCharacterActive( { character }));
    }

    formattedDate(character: ICharacter): string {
        let dateText = 'unknown';

        if (character.lastUpdatedDateTime)
            dateText = formatDate(character.lastUpdatedDateTime, 'medium', 'en_GB');

        return dateText;
    }
}
