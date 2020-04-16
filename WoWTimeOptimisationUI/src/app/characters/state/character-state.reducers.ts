import { ICharacterState } from './i-character-state';
import { createReducer, on, Action } from '@ngrx/store';
import * as CharacterActions from './character-state.actions';
import { initialCharacterState } from './character-state.initializers';


const characterReducer = createReducer(
    initialCharacterState,
    on(CharacterActions.updateCharacter, (state: ICharacterState, { character }) => ({
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
                                            level: character.level,
                                            blizzardId: character.blizzardId,
                                            lastUpdatedDateTime: character.lastUpdatedDateTime,
                                            active: arrayCharacter.active
                                            }
                                    } else {
                                        return arrayCharacter;
                                    }
                            })
        }))
);

export function characterStateReducer(state: ICharacterState | undefined, action: Action) {
    return characterReducer(state, action);
}

/*
state.allNavGroups.map(navGroup => ({...navGroup})) // 2
                                    .map(navGroup => { // 3
                                        if (navGroup.groupId === group.groupId) {
                                          return {
                                            ...navGroup,
                                            collapsed: !navGroup.collapsed,
                                          } else {
                                           return navGroup;
                                          }
                                        }
                                     })


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
*/
