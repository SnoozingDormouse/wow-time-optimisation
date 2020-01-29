import { Component, OnInit } from '@angular/core';
import { CreateActions } from '../state/common-component-state.actions';
import { commonComponentActionKey } from '../state/i-common-component-state.actionkey';
import { ActionCreator, Store } from '@ngrx/store';
import { ICommonComponentState } from '../state/i-common-component-state';

@Component({
    selector: 'common-component-rotating-icon',
    templateUrl: './rotating-icon.component.html',
    styleUrls: ['./rotating-icon.component.css']
})
export class RotatingIconComponent implements OnInit {

    private componentName: string;
    private key: string;
    public rotatingAction: ActionCreator;

    constructor(
        store: Store<ICommonComponentState>) {
    }

    ngOnInit() {
        this.componentName = 'RotatingIconComponent';
        this.key = commonComponentActionKey.toggleAnimation + this.componentName;

        const created = new CreateActions(this.componentName);
        console.log(created);
        if (created) {
            this.rotatingAction = created.actions[this.key];
        }
    }

    toggleRotation() {
        // store dispatches the action
    }
}
