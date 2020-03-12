import { createFeatureSelector } from '@ngrx/store';
import { IApplicationState } from 'src/app/state/i-application-state';
import { ICharacterState } from './i-character-state';

export const selectCharacterState = createFeatureSelector<IApplicationState, ICharacterState>('characters');
