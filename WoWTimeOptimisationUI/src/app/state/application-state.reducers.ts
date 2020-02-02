import { ApplicationState } from './i-application-state';
import * as fromAPIState from './api-state/api-state.index';

export const initialApplicationState: ApplicationState = {
    isExperimental: 'true',
    apiState: fromAPIState.initialAPIState
};

export function reducer(state: ApplicationState = initialApplicationState, action) {
    switch (action.type) {
        case fromAPIState.APIStateType.isLoadingData:
            return { ...state, apiState: fromAPIState.apiStateReducer(state.apiState, action) };

        default:
            return state;
    }
}
