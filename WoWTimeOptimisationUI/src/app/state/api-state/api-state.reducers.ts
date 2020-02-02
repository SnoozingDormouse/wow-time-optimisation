import { APIState } from './i-api-state';
import { APIStateType } from './api-state.types';
import { APIStateAction } from './api-state.index';

export const initialAPIState: APIState = {
    isLoadingData: JSON.stringify(false)
};

// const isLoadingDataAction: IAPIState = (state: IAPIState, { isLoadingData }) => ({ ...state, isLoadingData });

/*
const apiStateReducer = createReducer(
    initialAPIState,
    on( loadingDataAction, isLoadingDataAction)
);
*/

export function apiStateReducer(state: APIState = initialAPIState, action: APIStateAction) {
    switch (action.type) {
        case APIStateType.isLoadingData:
            return { ...state, isLoadingData: action.payload };

        default:
            return state;
    }
}
