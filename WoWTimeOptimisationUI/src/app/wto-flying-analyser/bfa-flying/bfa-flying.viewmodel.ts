import { IStep, ICharacterStepStatus } from './state/i-bfa-flying-state';
import { Injectable } from '@angular/core';

export interface IBFAFlyingViewModel {
    criteria: ICriteria;
    char1completed: ICharCompleted;
    char2completed: ICharCompleted;
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
    public populateViewModel(steps: IStep[], characterSteps: ICharacterStepStatus[]):Array<IBFAFlyingViewModel> {
        const viewModel: Array<IBFAFlyingViewModel> = [];

        steps.map(x => {
            viewModel.push(
            {
                criteria:  { criteriaId: x.criteriaId, name: x.name },
                char1completed: null,
                char2completed: null
            })});

        characterSteps[0].characterSteps
            .map(cs => {
                viewModel
                .filter( v => v.criteria.criteriaId === cs.criteriaId)
                .map(e => e.char1completed = { criteriaId: cs.criteriaId, iscomplete: cs.isComplete, amount: cs.amount });
            })

        characterSteps[1].characterSteps
            .map(cs => {
                viewModel
                .filter( v => v.criteria.criteriaId === cs.criteriaId)
                .map(e => e.char2completed = { criteriaId: cs.criteriaId, iscomplete: cs.isComplete, amount: cs.amount });
            })

        return viewModel;
    }
}
