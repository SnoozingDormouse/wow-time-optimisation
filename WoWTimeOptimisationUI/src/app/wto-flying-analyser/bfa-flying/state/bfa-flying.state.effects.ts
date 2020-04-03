import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap, exhaustMap, concatMap } from 'rxjs/internal/operators';
import { BFAFlyingActionLabels } from './bfa-flying.state.types';
import * as BFAFlyingActions from './bfa-flying.state.actions';
import { IStep, ICharacterStepStatus } from './i-bfa-flying-state';
import { BfaFlyingService } from '../bfa-flying.service';
import { ICharacter } from 'src/app/characters/state/i-character-state';
import { LoadCharacterSteps } from './bfa-flying.state.actions';

@Injectable()
export class BFAFlyingStateEffects {

    constructor(
        private actions$: Actions,
        private flyingService: BfaFlyingService)
        { }

    loadSteps$ = createEffect(
        () => this.actions$.pipe(
            ofType(BFAFlyingActionLabels.loadCriteriaSteps),
            switchMap(() => this.flyingService.getSteps().pipe(
                map((s: IStep[]) => BFAFlyingActions.updateCriteriaStepsAction( { payload: s })),
                catchError(() => EMPTY)
              ))
            )
          );

    loadCharacterSteps$ = createEffect(
            () => this.actions$.pipe(
                ofType<LoadCharacterSteps>(BFAFlyingActionLabels.loadCharacterSteps),
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
                )
              );
}
