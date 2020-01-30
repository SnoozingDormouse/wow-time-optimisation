import { createAction } from '@ngrx/store';
import { commonComponentActionKey } from './i-common-component-state.actionkey';

// actions are 'delegates' that set / change the values in the store (or slice of store)
// we use createAction to create an action in ngrx

export const toggleAnimation = createAction(commonComponentActionKey.toggleAnimation);
