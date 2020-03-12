import { createFeatureSelector } from '@ngrx/store';
import { IApplicationState } from '../../../state/i-application-state';
import { IBFAFlyingState } from './i-bfa-flying-state';

export const selectBFAFlyingState = createFeatureSelector<IApplicationState, IBFAFlyingState>('bfaFlyingState');
