export interface IBFAFlyingState {
    steps: Array<IStep>;
}

export interface IStep {
    id: number;
    name: string;
    steptype: IStepType
}

export enum IStepType {
    Achievement = 0,
    Criteria = 1,
    Reputation = 2,
    QuestServices = 3
}
