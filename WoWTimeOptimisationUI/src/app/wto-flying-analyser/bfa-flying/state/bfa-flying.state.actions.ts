import { createAction, props } from '@ngrx/store';
import { BFAFlyingActionLabels } from './bfa-flying.state.types';
import { IStep, ICharacterStepStatus } from './i-bfa-flying-state';


export const initialiseAction = createAction(BFAFlyingActionLabels.initialise);

export const updateCriteriaStepsAction = createAction(
    BFAFlyingActionLabels.updateCriteriaSteps,
    props<{ payload: IStep[]}>()
);

export const updateCharacterStepsAction = createAction(
    BFAFlyingActionLabels.updateCharacterSteps,
    props<{ payload: ICharacterStepStatus[]}>()
);


