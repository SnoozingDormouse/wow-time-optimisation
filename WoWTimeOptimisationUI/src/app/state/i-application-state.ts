import { IAPIState } from './api-state/i-api-state';

// applicationstate is the top-level ngrx state interface

export interface IApplicationState {
    isExperimental: string;
    apiState: IAPIState;
}
