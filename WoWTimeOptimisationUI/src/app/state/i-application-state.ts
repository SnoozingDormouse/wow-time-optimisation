import { ICommonComponentState } from '../wto-common-components/state/i-common-component-state';

// applicationstate is the top-level ngrx state interface

export interface IApplicationState {
    commonComponentState: ICommonComponentState;
}
