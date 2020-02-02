import { Action } from '@ngrx/store';
import { APIStateType } from './api-state.types';

export class SetAPIIsLoadingDataAction implements Action {
    readonly type = APIStateType.isLoadingData;

    constructor(public payload: string) {}
}

export type APIStateAction = SetAPIIsLoadingDataAction;

