import { IBFAFlyingState } from './i-bfa-flying-state';
import { BFAFlyingStateType } from './bfa-flying.state.types';
import { BFAFlyingStateAction } from './bfa-flying.state.actions';
import { initialBfaFlyingState } from './bfa-flying.state.initializers';

export function bfaFlyingStateReducer(state: IBFAFlyingState = initialBfaFlyingState, action: BFAFlyingStateAction) {
    switch (action.type) {
        case BFAFlyingStateType.initialisingSteps:
            return { ...state, initialisingSteps: action.payload };

        default:
            return state;
    }
}
