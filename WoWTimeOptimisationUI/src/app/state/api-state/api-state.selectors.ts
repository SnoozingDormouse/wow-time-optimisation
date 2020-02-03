import { createFeatureSelector } from '@ngrx/store';
import { IApplicationState } from '../i-application-state';
import { IAPIState } from './i-api-state';

export const selectAPIState = createFeatureSelector<IApplicationState, IAPIState>('apiState');
