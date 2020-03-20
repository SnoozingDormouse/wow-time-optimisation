import { IAPIState } from './i-api-state';
import { APIStateType } from './api-state.types';
import { APIStateAction } from './api-state.index';

export const initialAPIState: IAPIState = {
    isLoadingData: JSON.stringify(false)
};

export function apiStateReducer(state: IAPIState = initialAPIState, action: APIStateAction) {
    switch (action.type) {
        case APIStateType.isLoadingData:
            return { ...state, isLoadingData: action.payload };

        default:
            return state;
    }
}
