import { IBFAFlyingState } from './state/i-bfa-flying-state';
import { Injectable } from '@angular/core';

export interface IAchievementViewModel {
    achievements: Array<IAchievementTableViewModel>
}

export interface IAchievementTableViewModel {
    title: string;
    headers: string[];
    displayedColumns: string[];
    datasource: ICriteriaRowViewNode[];
}

interface ICriteriaRowViewNode {
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
export class AchievementViewModel {

    public populateViewModel(state: IBFAFlyingState): IAchievementViewModel {

        const viewModel: IAchievementViewModel = { achievements: [] };

        state.achievements.forEach(ach =>
        {
            const viewTableModel: Array<ICriteriaRowViewNode> = [];
            const characters: Array<string> = [];
            const displayedColumns: Array<string> = [ 'criteria' ];

            ach.stages.map(x => {
                viewTableModel.push(
                {
                    criteria: { criteriaId: x.criteriaId, name: x.description },
                    charscompleted: [],
                })});

            let index = 0;

            state.characterSteps.forEach(namedCharacter =>
                {
                    characters.push(namedCharacter.characterName);
                    displayedColumns.push(namedCharacter.characterName);

                    namedCharacter.characterSteps
                    .map(cs => {
                        viewTableModel
                        .filter( v => v.criteria.criteriaId === cs.criteriaId)
                        .map(e => e.charscompleted[index] =
                            { criteriaId: cs.criteriaId, iscomplete: cs.isComplete, amount: cs.amount });
                    });
                    index++;
                }
            );

            viewModel.achievements.push(
            {
                title: ach.achievement,
                headers: characters,
                displayedColumns,
                datasource: viewTableModel
            });
        });

        return viewModel;
    }
}
