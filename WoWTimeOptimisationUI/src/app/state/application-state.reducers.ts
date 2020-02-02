import { Action, createReducer, ActionReducer } from '@ngrx/store';
import { IApplicationState } from './i-application-state';
import * as fromAPIState from './api-state/api-state.index';

const initialApplicationState: IApplicationState = {
    isExperimental: 'true',
    APIstate: fromAPIState.initialAPIState
};

const applicationStateReducer: ActionReducer<IApplicationState, Action> = createReducer(
    initialApplicationState,
);

export function reducer(state: IApplicationState | undefined, action: Action) {
    return applicationStateReducer;
}
