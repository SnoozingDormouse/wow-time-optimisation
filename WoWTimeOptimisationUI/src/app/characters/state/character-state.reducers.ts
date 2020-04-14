import { ICharacterState, ICharacter } from './i-character-state';
import { CharacterStateAction } from './character-state.index';
import { initialCharacterState } from './character-state.initializers';
import { createReducer, on, Action } from '@ngrx/store';
import * as CharacterActions from './character-state.actions';
import { CharacterActionLabels } from './character-state.types';

/*
export const CharacterStateType  = {
    characters: '[CharacterState] Character Related Actions'
};

export function characterStateReducer(state: ICharacterState = initialCharacterState, action: CharacterStateAction) {
    switch (action.type) {
        case CharacterStateType.characters:
            return { ...state, characters: action.payload };

        default:
            return state;
    }
}
*/

const characterReducer = createReducer(
    on(
        CharacterActions.updateCharacter,
        (state: ICharacterState, { character }) => ({
            ...state,
            characters: []
        }))
);

export function characterStateReducer(state: ICharacterState | undefined, action: Action) {
    return characterReducer(state: On< {characters: ICharacter[] }, action);
}
