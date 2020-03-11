import { IAPIState } from './api-state/i-api-state';
import { IBFAFlyingState } from '../wto-flying-analyser/bfa-flying/state/i-bfa-flying-state';

// applicationstate is the top-level ngrx state interface

export interface IApplicationState {
    isExperimental: string;
    apiState: IAPIState;
    BFAFlyingState: IBFAFlyingState;
}
