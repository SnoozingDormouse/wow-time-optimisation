import { createAction, props, union } from '@ngrx/store';
import { BFAFlyingActionLabels } from './bfa-flying.state.types';
import { IStep, ICharacterStepStatus } from './i-bfa-flying-state';
import { ICharacter } from 'src/app/characters/state/i-character-state';
import { Action } from 'rxjs/internal/scheduler/Action';


export const initialiseAction = createAction(BFAFlyingActionLabels.initialise);

export const updateCriteriaStepsAction = createAction(
    BFAFlyingActionLabels.updateCriteriaSteps,
    props<{ payload: IStep[]}>()
);

export const updateCharacterStepsAction = createAction(
    BFAFlyingActionLabels.updateCharacterSteps,
    props<{ payload: ICharacterStepStatus}>()
);

export const loadCharacterSteps = createAction(
    BFAFlyingActionLabels.loadCharacterSteps,
    props<{ character: ICharacter }>()
);

const actions = union(
    { loadCharacterSteps}
);

export type LoadCharacterSteps = typeof actions;
