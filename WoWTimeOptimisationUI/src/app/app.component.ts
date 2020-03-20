import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IApplicationState } from './state/i-application-state';
import { Observer } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IUIState, selectUIState } from './state/ui-state/ui.state.index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
    public title: string;
    public isMenuOpen: boolean;
    private subscription;
    private observer: Observer<any>;

    constructor(private store: Store<IApplicationState>) {

        this.observer = {
            next: (state: IUIState) => {
                this.title = state.title;
                this.isMenuOpen = state.isMenuOpen;
                console.log(this.title);
            },
            error: (err: any) => {},
            complete: () => {}
        };
    }

    ngOnInit() {
        this.subscription = this.store.pipe(map(state => selectUIState(state))).subscribe(this.observer);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
