import { IBFAFlyingState, IStepType, IStep } from './i-bfa-flying-state';
import { BFAFlyingStateType } from './bfa-flying.state.types';
import { BFAFlyingStateAction } from './bfa-flying.state.actions';

const initialStep: IStep = {
    id: 0,
    name: 'Test Initial State',
    steptype: IStepType.Achievement
};

export const initialBfaFlyingState: IBFAFlyingState = {
    steps: [ initialStep ]
};

export function apiStateReducer(state: IBFAFlyingState = initialBfaFlyingState, action: BFAFlyingStateAction) {
    switch (action.type) {
        case BFAFlyingStateType.initialisingSteps:
            return { ...state, initialisingSteps: action.payload };

        default:
            return state;
    }
}
