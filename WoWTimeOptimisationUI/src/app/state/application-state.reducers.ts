import { IApplicationState } from './i-application-state';
import * as fromAPIState from './api-state/api-state.index';
import * as fromBFAFlyingState from '../wto-flying-analyser/bfa-flying/state/bfa-flying.state.index'
import * as fromCharacterState from '../characters/state/character-state.index'
import * as fromUIState from './ui-state/ui.state.index';

export const initialApplicationState: IApplicationState = {
    isExperimental: 'true',
    apiState: fromAPIState.initialAPIState,
    uiState: fromUIState.initialUIState,
    bfaFlyingState: fromBFAFlyingState.initialBfaFlyingState,
    characters: fromCharacterState.initialCharacterState,
};

export function reducer(state: IApplicationState = initialApplicationState, action) {
    switch (action.type) {
    //     case fromAPIState.APIStateType.isLoadingData:
    //         return { ...state, apiState: fromAPIState.apiStateReducer(state.apiState, action) };

    //     case fromUIState.uiStateType.initialisingUIState:
    //         return { ...state, uiState: fromUIState.uiStateReducer(state.uiState, action) };

    //     case fromBFAFlyingState.BFAFlyingActionLabels.initialise.BFAFlyingAction.initialise:
    //         return { ...state, bfaFlyingState: fromBFAFlyingState.bfaFlyingStateReducer(state.bfaFlyingState, action) };

    //     case fromCharacterState.CharacterStateType.characters:
    //         return { ...state, characters: fromCharacterState.characterStateReducer(state.characters, action) };

         default:
             return state;
    }
}
