import { IStep, ICharacterStepStatus } from './state/i-bfa-flying-state';
import { Injectable } from '@angular/core';

export interface IBFAFlyingViewModel {
    headers: string[];
    datasource: Array<IBFAFlyingViewNode>
}

interface IBFAFlyingViewNode {
    criteria: ICriteria;
    charscompleted: Array<ICharCompleted>;
}

interface ICriteria {
    criteriaId: number;
    name: string;
}

interface ICharCompleted {
    criteriaId: number;
    iscomplete: boolean;
    amount: number;
}

@Injectable()
export class BFAFlyingViewModel {
        public populateViewModel(steps: IStep[], characterSteps: ICharacterStepStatus[]): IBFAFlyingViewModel {
        const viewModel: Array<IBFAFlyingViewNode> = [];
        const characters: Array<string> = [];

        steps.map(x => {
            viewModel.push(
            {
                criteria: { criteriaId: x.criteriaId, name: x.name },
                charscompleted: [],
            })});

        let index = 0;

        characterSteps.forEach(namedCharacter =>
            {
                characters.push(namedCharacter.characterName);

                namedCharacter.characterSteps
                .map(cs => {
                    viewModel
                    .filter( v => v.criteria.criteriaId === cs.criteriaId)
                    .map(e => e.charscompleted[index] =
                        { criteriaId: cs.criteriaId, iscomplete: cs.isComplete, amount: cs.amount });
                });
                index++;
            }
        );

        return {
            headers: characters,
            datasource: viewModel
        }
    }
}
