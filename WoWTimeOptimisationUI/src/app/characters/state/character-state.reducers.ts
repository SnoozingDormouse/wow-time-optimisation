import { ICharacterState } from './i-character-state';
import { CharacterStateAction } from './character-state.index';
import { initialCharacterState } from './character-state.initializers';


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
