import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, concatMap, switchMap } from 'rxjs/internal/operators';
import { BFAFlyingActionLabels } from './bfa-flying.state.types';
import * as BFAFlyingActions from './bfa-flying.state.actions';
import { ICharacterStepStatus } from './i-bfa-flying-state';
import { BfaFlyingService } from '../bfa-flying.service';
import { CharacterActions, AchievementActions } from './bfa-flying.state.actions';

@Injectable()
export class BFAFlyingStateEffects {

    constructor(
        private actions$: Actions,
        private flyingService: BfaFlyingService)
        { }


    loadSteps$ = createEffect(
        () => this.actions$.pipe(
            ofType<AchievementActions>(BFAFlyingActionLabels.loadAchievements),
            switchMap(
                () => this.flyingService.getAchievements().pipe(
                    map((s) => BFAFlyingActions.updateAchievements( { achievements: s }))))
          ));

    loadCharacterSteps$ = createEffect(
            () => this.actions$.pipe(
                ofType<CharacterActions>(BFAFlyingActionLabels.loadCharacterSteps),
                concatMap(
                    ({ character }) =>
                        {
                            console.log(character);
                            return this.flyingService.getCharacterSteps(character)
                                .pipe(
                                    map(
                                        (s: ICharacterStepStatus) =>
                                            BFAFlyingActions.updateCharacterStepsAction({ payload: s })),
                                        catchError(() => EMPTY));
                        })
                ));
}
