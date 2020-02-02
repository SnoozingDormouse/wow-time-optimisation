import { IApplicationState } from './i-application-state';
import * as fromAPIState from './api-state/api-state.index';

export const initialApplicationState: IApplicationState = {
    isExperimental: 'true',
    apiState: fromAPIState.initialAPIState
};

export function reducer(state: IApplicationState = initialApplicationState, action) {
    switch (action.type) {
        case fromAPIState.APIStateType.isLoadingData:
            return { ...state, apiState: fromAPIState.apiStateReducer(state.apiState, action) };

        default:
            return state;
    }
}
