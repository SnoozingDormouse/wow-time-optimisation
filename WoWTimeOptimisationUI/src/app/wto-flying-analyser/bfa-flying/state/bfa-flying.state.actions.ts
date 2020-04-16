import { createAction, props, union } from '@ngrx/store';
import { BFAFlyingActionLabels } from './bfa-flying.state.types';
import { ICharacterStepStatus, IAchievement } from './i-bfa-flying-state';
import { ICharacter } from 'src/app/characters/state/i-character-state';


export const initialiseAction = createAction(BFAFlyingActionLabels.initialise);

export const loadAchievements = createAction(
    BFAFlyingActionLabels.loadAchievements
);

export const updateAchievements = createAction(
    BFAFlyingActionLabels.updateAchievements,
    props<{ achievements: IAchievement[] }>()
);

export const updateCharacterStepsAction = createAction(
    BFAFlyingActionLabels.updateCharacterSteps,
    props<{ payload: ICharacterStepStatus}>()
);

export const loadCharacterSteps = createAction(
    BFAFlyingActionLabels.loadCharacterSteps,
    props<{ character: ICharacter }>()
);

const characterActions = union(
    { loadCharacterSteps }
);

export type CharacterActions = typeof characterActions;

const achievementActions = union(
    { updateAchievements }
)

export type AchievementActions = typeof achievementActions;


