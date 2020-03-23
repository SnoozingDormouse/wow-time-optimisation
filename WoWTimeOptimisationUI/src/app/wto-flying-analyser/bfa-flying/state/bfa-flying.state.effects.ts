import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/internal/operators';
import { BFAFlyingActionLabels } from './bfa-flying.state.types';
import * as BFAFlyingActions from './bfa-flying.state.actions';
import { IStep } from './i-bfa-flying-state';
import { BfaFlyingService } from '../bfa-flying.service';

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
}
