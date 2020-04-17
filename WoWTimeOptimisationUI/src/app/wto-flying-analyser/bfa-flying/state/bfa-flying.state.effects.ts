import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, concatMap, switchMap, tap } from 'rxjs/internal/operators';
import { BFAFlyingActionLabels } from './bfa-flying.state.types';
import * as BFAFlyingActions from './bfa-flying.state.actions';
import { ICharacterStepStatus } from './i-bfa-flying-state';
import { BfaFlyingService } from '../bfa-flying.service';
import { CharacterActions, AchievementActions, FactionActions } from './bfa-flying.state.actions';

@Injectable()
export class BFAFlyingStateEffects {

    constructor(
        private actions$: Actions,
        private flyingService: BfaFlyingService)
        { }


    loadSteps$ = createEffect(
        () => this.actions$.pipe(
            ofType<FactionActions>(BFAFlyingActionLabels.loadAchievements),
            switchMap(
                ({activeCharFaction}) => this.flyingService.getAchievements(activeCharFaction).pipe(
                    tap(s => { console.log('achievements: '); console.log(s) }),
                    map((s) => BFAFlyingActions.updateAchievements( { achievements: s }))))
          ));

    loadCharacterSteps$ = createEffect(
            () => this.actions$.pipe(
                ofType<CharacterActions>(BFAFlyingActionLabels.loadCharacterSteps),
                concatMap(
                    ({ character }) =>
                        {
                            return this.flyingService.getCharacterSteps(character)
                                .pipe(
                                    tap(s => { console.log('character Steps: '); console.log(s) }),
                                    map(
                                        (s: ICharacterStepStatus) =>
                                            BFAFlyingActions.updateCharacterStepsAction({ payload: s })),
                                        catchError(() => EMPTY));
                        })
                ));
}
