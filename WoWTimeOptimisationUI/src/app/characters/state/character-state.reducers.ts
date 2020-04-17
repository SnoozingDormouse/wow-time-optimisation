import { ICharacterState, ICharacter } from './i-character-state';
import { createReducer, on, Action } from '@ngrx/store';
import * as CharacterActions from './character-state.actions';
import { initialCharacterState } from './character-state.initializers';


const characterReducer = createReducer(
    initialCharacterState,
    on(CharacterActions.updateCharacter, (state: ICharacterState, { character }) => ({
            ...state,
            activeCharFaction: GetActiveCharFaction(state.characters),
            characters:
            state.characters.map( arrayCharacter => {
                                if (arrayCharacter.name === character.name &&
                                    arrayCharacter.realm === arrayCharacter.realm)
                                    {
                                        return {
                                            useraccountId: character.useraccountId,
                                            name: character.name,
                                            realm: character.realm,
                                            faction: character.faction,
                                            characterClass: character.characterClass,
                                            race: character.race,
                                            level: character.level,
                                            blizzardId: character.blizzardId,
                                            lastUpdatedDateTime: character.lastUpdatedDateTime,
                                            active: arrayCharacter.active
                                            }
                                    } else {
                                        return arrayCharacter;
                                    }
                            })
        })),
    on(CharacterActions.toggleCharacterActive, (state: ICharacterState, { character }) => ({
        ...state,
        characters:
        state.characters.map( arrayCharacter => {
                            if (arrayCharacter.name === character.name &&
                                arrayCharacter.realm === arrayCharacter.realm)
                                {
                                    return {
                                        useraccountId: character.useraccountId,
                                        name: character.name,
                                        realm: character.realm,
                                        faction: character.faction,
                                        characterClass: character.characterClass,
                                        race: character.race,
                                        level: character.level,
                                        blizzardId: character.blizzardId,
                                        lastUpdatedDateTime: character.lastUpdatedDateTime,
                                        active: !character.active
                                     }
                                } else {
                                    return arrayCharacter;
                                }
                        })
    })),
);

export function characterStateReducer(state: ICharacterState | undefined, action: Action) {
    return characterReducer(state, action);
}

function GetActiveCharFaction(characters: ICharacter[]): number {
    let activeCharacters = characters.filter(c => c.active);

    let sum = 0;
    activeCharacters.map(c => sum = sum + c.faction);
    sum = sum / activeCharacters.length;

    if (sum !== 469 && sum !== 67)
        sum = 0;

    return sum;
}
