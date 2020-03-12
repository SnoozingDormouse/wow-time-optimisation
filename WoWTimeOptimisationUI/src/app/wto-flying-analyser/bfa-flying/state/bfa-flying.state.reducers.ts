import { IBFAFlyingState, IStepType, IStep } from './i-bfa-flying-state';
import { BFAFlyingStateType } from './bfa-flying.state.types';
import { BFAFlyingStateAction } from './bfa-flying.state.actions';

const step1: IStep = {
    id: 0,
    name: 'Test Step 1',
    steptype: IStepType.Achievement
};

const step2: IStep = {
    id: 1,
    name: 'Test Step 2',
    steptype: IStepType.Achievement
};

const step3: IStep = {
    id: 2,
    name: 'Test Step 3',
    steptype: IStepType.Achievement
};

const step4: IStep = {
    id: 3,
    name: 'Test Step 4',
    steptype: IStepType.Achievement
};

const step5: IStep = {
    id: 4,
    name: 'Test Step 5',
    steptype: IStepType.Achievement
};

export const initialBfaFlyingState: IBFAFlyingState = {
    steps: [ step1, step2, step3, step4, step5 ]
};

export function bfaFlyingStateReducer(state: IBFAFlyingState = initialBfaFlyingState, action: BFAFlyingStateAction) {
    switch (action.type) {
        case BFAFlyingStateType.initialisingSteps:
            return { ...state, initialisingSteps: action.payload };

        default:
            return state;
    }
}
