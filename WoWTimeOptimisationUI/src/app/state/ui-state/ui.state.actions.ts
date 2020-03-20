import { Action } from '@ngrx/store';
import { uiStateType } from './ui.state.types';
import { IUIState } from './i-ui-state';


export class SetInitialUIStateAction implements Action {
    readonly type = uiStateType.initialisingUIState
    constructor(public payload: IUIState) {}
}

export class SetUIStateAction implements Action {
    readonly type = uiStateType.setUITitle
    constructor(public payload: IUIState) {}
}

export type UIStateAction = SetInitialUIStateAction | SetUIStateAction;

