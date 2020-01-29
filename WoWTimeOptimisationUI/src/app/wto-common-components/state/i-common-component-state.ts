// common component state is the feature-level ngrx state interface for the
// wto-common-components feature

export interface ICommonComponentStates {
    componentName: string;
    componentState: ICommonComponentState[];
}

export interface ICommonComponentState {
    isCalculating: boolean;
}
