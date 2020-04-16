import { ICharacterState } from './i-character-state';
import { createReducer, on, Action } from '@ngrx/store';
import * as CharacterActions from './character-state.actions';
import { initialCharacterState } from './character-state.initializers';


const characterReducer = createReducer(
    initialCharacterState,
    on(CharacterActions.updateCharacter, (state: ICharacterState, { character }) => ({
            ...state,
            characters: [
                ...state.characters,
                {
                    useraccountId: character.useraccountId,
                    name: character.name,
                    realm: character.realm,
                    faction: character.faction,
                    characterClass: character.characterClass,
                    level: character.level,
                    blizzardId: character.blizzardId,
                    lastUpdatedDateTime: character.lastUpdatedDateTime,
                    active: false,
                }
            ]
        }))
);

export function characterStateReducer(state: ICharacterState | undefined, action: Action) {
    return characterReducer(state, action);
}
