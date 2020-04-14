import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, concatMap, switchMap } from 'rxjs/internal/operators';
import { CharacterService } from '../character.service';
import { CharacterActionLabels } from './character-state.types';
import * as CharacterActions from './character-state.actions';
import { ICharacter } from './i-character-state';
import { CharacterAction } from './character-state.actions';

@Injectable()
export class CharacterStateEffects {

    constructor(
        private actions$: Actions,
        private characterService: CharacterService)
        { }


    updateCharacterOnServer$ = createEffect(
        () => this.actions$.pipe(
            ofType<CharacterAction>(CharacterActionLabels.loadCharacterOnServer),
            concatMap(
                ({ character }) =>
                    {
                        console.log(character);
                        return this.characterService.updateCharacterInformationOnServer(character)
                            .pipe(
                                map(
                                    (s: ICharacter) =>
                                        CharacterActions.updateCharacter({ character: s })),
                                    catchError(() => EMPTY));
                    })
            ));
}
