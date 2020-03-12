import { Action } from '@ngrx/store';
import { CharacterStateType } from './character-state.reducers';

export class SetCharactersAction implements Action {
    readonly type = CharacterStateType.characters;

    constructor(public payload: string) {}
}

export type CharacterStateAction = SetCharactersAction;

