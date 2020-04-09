import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacterStepStatus, IAchievement } from './state/bfa-flying.state.index';
import { IApplicationState } from 'src/app/state/i-application-state';
import { Store } from '@ngrx/store';
import { ICharacter } from 'src/app/characters/state/character-state.index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BfaFlyingService {
    apiURL = 'https://localhost:44329/api/Flying/BFA';

    constructor(
        private store: Store<IApplicationState>,
        private httpClient: HttpClient) { }

    public getAchievements(): Observable<IAchievement[]>  {
        return this.httpClient.get<IAchievement[]>(this.apiURL);
    }

    public getCharacterSteps(character: ICharacter): Observable<ICharacterStepStatus> {
        const characterAPI =  `${this.apiURL}/${character.realm}/${character.name}`;
        return this.httpClient.get<ICharacterStepStatus>(characterAPI);
    }
}
