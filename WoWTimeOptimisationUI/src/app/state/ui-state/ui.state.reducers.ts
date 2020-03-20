import { IUIState } from './i-ui-state';
import { initialUIState } from './ui.state.initializers';
import { UIStateAction } from './ui.state.actions';
import { uiStateType } from './ui.state.types';


export function uiStateReducer(state: IUIState = initialUIState, action: UIStateAction) {
    switch (action.type) {
        case uiStateType.initialisingUIState:
            return {
                ...state,
                title: action.payload.title,
                isMenuOpen: action.payload.isMenuOpen };

        case uiStateType.setUITitle:
            return {
                ...state,
                title: action.payload.title,
                isMenuOpen: action.payload.isMenuOpen };

        default:
            return state;
    }
}
