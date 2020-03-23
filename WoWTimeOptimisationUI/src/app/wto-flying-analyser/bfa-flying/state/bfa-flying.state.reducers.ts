import { createReducer, on, Action } from '@ngrx/store';
import { initialBfaFlyingState } from './bfa-flying.state.initializers';
import { IBFAFlyingState } from './i-bfa-flying-state';
import * as BFAFlyingActions from './bfa-flying.state.actions';


const bfaFlyingReducer = createReducer(
    initialBfaFlyingState,
    on(BFAFlyingActions.updateCriteriaStepsAction,
        (state, { payload }) => ({
            ...state,
            steps: payload }))
    //on(BFAFlyingActions.updateCharacterStepsAction,
    //    (state, { steps }) => ({ steps, characterSteps: state.characterSteps }))
);

export function bfaFlyingStateReducer(state: IBFAFlyingState | undefined, action: Action) {
    return bfaFlyingReducer(state, action);
}
