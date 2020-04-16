import { IAPIState } from './api-state/i-api-state';
import { IBFAFlyingState } from '../wto-flying-analyser/bfa-flying/state/i-bfa-flying-state';
import { ICharacterState } from '../characters/state/i-character-state';
import { IUIState } from './ui-state/i-ui-state';

// applicationstate is the top-level ngrx state interface

export interface IApplicationState {
    isExperimental: string;
    apiState: IAPIState;
    uiState: IUIState;
    bfaFlyingState: IBFAFlyingState;
    characterCollection: ICharacterState;
}
