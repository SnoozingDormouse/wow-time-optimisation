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
            achievements: UpdateAchievementCriteria(state, achievements) })),
    on(BFAFlyingActions.updateCharacterStepsAction,
        (state, { payload }) => ({
            ...state,
            characterSteps: UpdateCharacterSteps(state, payload) }))
);

function UpdateAchievementCriteria(state: any, achievements: IAchievement[]): Array<IAchievement>  {
    const a: Array<IAchievement> = _.cloneDeep(state.achievements);
    let altered = false;

    achievements.forEach( ach =>
    {
        if (a) {
            a.forEach(element => {
                if (element.achievement.toLowerCase() === ach.achievement.toLowerCase())
                {
                    element.stages = ach.stages;
                    altered = true;
                }
            });
        }

        if (altered === false) {
            a.push(ach);
        }
    });

    return a;
}

function UpdateCharacterSteps(state: any, payload: ICharacterStepStatus): Array<ICharacterStepStatus>  {

    const cs: Array<ICharacterStepStatus> = _.cloneDeep(state.characterSteps);
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

