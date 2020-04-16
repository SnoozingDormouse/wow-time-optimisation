import { createReducer, on, Action } from '@ngrx/store';
import * as _ from 'lodash';
import { initialBfaFlyingState } from './bfa-flying.state.initializers';
import { IBFAFlyingState, ICharacterStepStatus, IAchievement } from './i-bfa-flying-state';
import * as BFAFlyingActions from './bfa-flying.state.actions';


const bfaFlyingReducer = createReducer(
    initialBfaFlyingState,
    on(BFAFlyingActions.updateAchievements,
        (state, { achievements }) => ({
            ...state,
            achievements: _.cloneDeep(achievements)})),
    on(BFAFlyingActions.updateCharacterStepsAction,
        (state, { payload }) => ({
            ...state,
            characterInfo: [
                ...state.characterInfo,
                {
                    characterName: payload.characterName,
                    characterSteps: _.cloneDeep(payload.characterSteps)
                }
            ]
        }))
);


export function bfaFlyingStateReducer(state: IBFAFlyingState | undefined, action: Action) {
    return bfaFlyingReducer(state, action);
}

