import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
import { setAPIIsLoadingData } from './api-state.actions';
import { IAPIState, initialAPIState } from './i-api-state';

const apiStateReducer = createReducer(
    initialAPIState,
    on(setAPIIsLoadingData, (state: IAPIState,
                             { isLoadingData }) => ({ ...state, isLoadingData }))
);

export function reducer(state: IAPIState | undefined, action: Action) {
    return apiStateReducer;
}
