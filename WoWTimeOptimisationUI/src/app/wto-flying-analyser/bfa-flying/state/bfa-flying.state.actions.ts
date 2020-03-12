import { Action } from '@ngrx/store';
import { BFAFlyingStateType } from './bfa-flying.state.types';


export class SetBFAFlyingStateAction implements Action {
    readonly type = BFAFlyingStateType.initialisingSteps

    constructor(public payload: string) {}
}

export type BFAFlyingStateAction = SetBFAFlyingStateAction;

