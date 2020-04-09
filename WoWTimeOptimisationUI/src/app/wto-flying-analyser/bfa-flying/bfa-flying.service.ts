import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStep, ICharacterStepStatus } from './state/bfa-flying.state.index';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { ICharacter } from 'src/app/characters/state/character-state.index';

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

    public getCharacterSteps(character: ICharacter)  {
        const characterAPI =  `${this.apiURL}/${character.realm}/${character.name}`;
        return this.httpClient.get<ICharacterStepStatus>(characterAPI);
    }
}
