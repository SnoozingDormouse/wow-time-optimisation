import { createAction, props } from '@ngrx/store';
import { APIStateType } from './api-state.types';

// actions are 'delegates' that set / change the values in the store (or slice of store)
// we use createAction to create an action in ngrx

export const setAPIIsLoadingData = createAction(
    APIStateType.isLoadingData,
    props<{ isLoadingData: string }>()
);

