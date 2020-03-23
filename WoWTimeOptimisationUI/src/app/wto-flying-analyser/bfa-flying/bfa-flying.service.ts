import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStep } from './state/bfa-flying.state.index';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import * as BFAFlyingActions from './state/bfa-flying.state.actions'

@Injectable({
  providedIn: 'root'
})
export class BfaFlyingService {
    apiURL = 'https://localhost:44329/api/Flying/BFA';

    constructor(
        private store: Store<IApplicationState>,
        private httpClient: HttpClient) { }

    public getSteps()  {
        return this.httpClient.get<IStep[]>(this.apiURL);
    }
}
