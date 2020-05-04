import { createAction, props, union } from '@ngrx/store';
import { CharacterActionLabels } from './character-state.types';
import { ICharacter } from './i-character-state';

export const initialiseCharacters = createAction(CharacterActionLabels.initialise);

export const loadCharacterOnServer = createAction(
    CharacterActionLabels.loadCharacterOnServer,
    props<{ character: ICharacter }>()
);

export const updateCharacter = createAction(
    CharacterActionLabels.updateCharacter,
    props<{ character: ICharacter }>()
);

export const toggleCharacterActive = createAction(
    CharacterActionLabels.toggleCharacterActive,
    props<{ character: ICharacter }>()
);

export const updateActiveFaction = createAction(
    CharacterActionLabels.updateActiveFaction
);

const loadAction = union(
    { loadCharacterOnServer}
);

export type LoadCharacterAction = typeof loadAction;



