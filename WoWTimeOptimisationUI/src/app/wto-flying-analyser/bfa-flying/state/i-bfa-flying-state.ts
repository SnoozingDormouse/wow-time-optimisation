import { ICharacter } from 'src/app/characters/state/i-character-state';

export interface IBFAFlyingState {
    achievements: Array<IAchievement>;
    characterInfo: Array<ICharacterStepStatus>;
}

export interface IAchievement {
    achievement: string;
    stages: Array<IStep>;
}

export interface IStep {
    criteriaId: number;
    amount: number;
    achievementId: number;
    description: string;
    faction: number;
    parentId: number;
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
    isCompleted: boolean;
}

export interface ICharacterStepStatus {
    characterName: string;
    characterSteps: Array<IStepStatus>;
}
