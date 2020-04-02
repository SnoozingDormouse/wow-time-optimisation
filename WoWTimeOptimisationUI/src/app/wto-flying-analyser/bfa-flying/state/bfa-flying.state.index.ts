import { ActionReducerMap } from '@ngrx/store';
import { IBFAFlyingState } from './i-bfa-flying-state';


export * from './i-bfa-flying-state';
export * from './bfa-flying.state.initializers';
export * from './bfa-flying.state.types';

export * from './bfa-flying.state.actions';
export * from './bfa-flying.state.selectors';
export * from './bfa-flying.state.reducers';

export const featureKey = 'bfaFlyingState';
