import { ICharacter } from 'src/app/characters/state/i-character-state';

export interface IBFAFlyingState {
    steps: Array<IStep>;
    characterSteps: Array<ICharacterStepStatus>;
}

export interface IStep {
    criteriaId: number;
    name: string;
    steptype: IStepType;
}

export enum IStepType {
    Achievement = 0,
    Criteria = 1,
    Reputation = 2,
    QuestServices = 3
}

export interface IStepStatus {
    criteriaId: number;
    amount: number;
    isComplete: boolean;
}

export interface ICharacterStepStatus {
    characterName: string;
    characterSteps: Array<IStepStatus>;
}
