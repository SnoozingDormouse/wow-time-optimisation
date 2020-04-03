import { createFeatureSelector } from '@ngrx/store';
import { IApplicationState } from 'src/app/state/i-application-state';
import { ICharacterState } from './i-character-state';

export * from './i-character-state';
export * from './character-state.actions';
export * from './character-state.reducers';
export * from './character-state.selectors';
export * from './character-state.initializers';

export const featureKey = 'characters';

export const selectCharactersState = createFeatureSelector<IApplicationState, ICharacterState>('characters');
export const selectActiveCharactersState = createFeatureSelector<IApplicationState, ICharacterState>('characters');
