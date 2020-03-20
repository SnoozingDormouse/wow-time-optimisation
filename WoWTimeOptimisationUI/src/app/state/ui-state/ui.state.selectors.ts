import { createFeatureSelector } from '@ngrx/store';
import { IApplicationState } from '../i-application-state';
import { IUIState } from './i-ui-state';


export const selectUIState = createFeatureSelector<IApplicationState, IUIState>('uiState');
