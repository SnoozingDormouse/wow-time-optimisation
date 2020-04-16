import { createFeatureSelector } from '@ngrx/store';
import { IBFAFlyingState } from './i-bfa-flying-state';
import { IApplicationState } from 'src/app/state/i-application-state';

export const featureKey = 'bfaFlyingState';

export const selectBFAFlyingState = createFeatureSelector<IApplicationState, IBFAFlyingState>('bfaFlyingState');
