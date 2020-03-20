import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Observer } from 'rxjs';
import { IApplicationState } from 'src/app/state/application-state.index';
import { Store } from '@ngrx/store';
import { IUIState, SetUIStateAction, selectUIState } from 'src/app/state/ui-state/ui.state.index';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    //@Input() TitleText: string;
    public title: string;
    public isMenuOpen: boolean;
    private subscription;
    private observer: Observer<any>;

    public faBars: IconDefinition = faBars;

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

    toggleMenu() {
        const uiState: IUIState = { title: this.title, isMenuOpen: !this.isMenuOpen };
        this.store.dispatch( new SetUIStateAction(uiState));
        // dispatch open / close menu
    }
}
