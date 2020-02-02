import { IAPIState, APIState } from './api-state/i-api-state';

// applicationstate is the top-level ngrx state interface

export interface IApplicationState {
    isExperimental: string;
    apiState: IAPIState;
}

export class ApplicationState implements IApplicationState {
    isExperimental: string;
    apiState: IAPIState;
}
