import { ICharacter, ICharacterState } from './i-character-state';
import { CharacterStateAction } from './character-state.index';


export const CharacterStateType  = {
    characters: '[CharacterState] Character Related Actions'
};

const defaultCharacter: ICharacter = {
    name: 'Khoria',
    realm: 'Moonglade',
    level: 120,
    blizzardId: 12345
}

export const initialCharacterState: ICharacterState = {
    characters: [ defaultCharacter ]
};


export function characterStateReducer(state: ICharacterState = initialCharacterState, action: CharacterStateAction) {
    switch (action.type) {
        case CharacterStateType.characters:
            return { ...state, characters: action.payload };

        default:
            return state;
    }
}
