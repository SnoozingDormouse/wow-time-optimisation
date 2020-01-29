import { createAction } from '@ngrx/store';
import { commonComponentActionKey } from './i-common-component-state.actionkey';
import { OnInit } from '@angular/core';

// actions are 'delegates' that set / change the values in the store (or slice of store)
// we use createAction to create an action in ngrx

// commonComponentActionKey has a number of actions that might be common to components
// we append the component undergoing the action to create a unique verb-noun combination
// that can be used by the reducer to act on the actions.

export class CreateActions implements OnInit  {

    public actions: object;

    constructor(public componentName: string) {}

    ngOnInit(): void {

        const key = commonComponentActionKey.toggleAnimation + this.componentName;
        this.actions[key] = createAction(key);
    }
}
