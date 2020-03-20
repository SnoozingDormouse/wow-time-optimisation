import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStep } from './state/bfa-flying.state.index';

@Injectable({
  providedIn: 'root'
})
export class BfaFlyingService {
    apiURL = 'https://localhost:44329/api/Flying/BFA';

    constructor(private httpClient: HttpClient) { }

    public getStages() {
        return this.httpClient.get<IStep[]>(this.apiURL);
    }
}
