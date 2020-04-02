import { createReducer, on, Action } from '@ngrx/store';
import * as _ from 'lodash';
import { initialBfaFlyingState } from './bfa-flying.state.initializers';
import { IBFAFlyingState, ICharacterStepStatus } from './i-bfa-flying-state';
import * as BFAFlyingActions from './bfa-flying.state.actions';


const bfaFlyingReducer = createReducer(
    initialBfaFlyingState,
    on(BFAFlyingActions.updateCriteriaStepsAction,
        (state, { payload }) => ({
            ...state,
            steps: payload })),
    on(BFAFlyingActions.updateCharacterStepsAction,
        (state, { payload }) => ({
            ...state,
            characterSteps: UpdateCharacterSteps(state, payload) }))
);

function UpdateCharacterSteps(state: any, payload: ICharacterStepStatus): Array<ICharacterStepStatus>  {

    let cs: Array<ICharacterStepStatus> = _.cloneDeep(state.characterSteps);
    let altered = false;

    if (cs) {
        cs.forEach(element => {
            if (element.characterName.toLowerCase() === payload.characterName.toLowerCase())
            {
                element.characterSteps = payload.characterSteps;
                altered = true;
            }
        });
    }

    if (altered === false) {
        cs.push(payload);
    }

    return cs;
};

export function bfaFlyingStateReducer(state: IBFAFlyingState | undefined, action: Action) {
    return bfaFlyingReducer(state, action);
}

