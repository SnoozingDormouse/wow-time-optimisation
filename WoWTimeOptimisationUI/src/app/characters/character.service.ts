import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from 'src/app/characters/state/character-state.index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    apiURL = 'http://localhost:50421/api/CharacterData/Update';

    constructor(
        private httpClient: HttpClient) { }

    public updateCharacterInformationOnServer(character: ICharacter): Observable<ICharacter> {
        const characterAPI =  `${this.apiURL}/${character.realm}/${character.name}`;
        return this.httpClient.get<ICharacter>(characterAPI);
    }
}
