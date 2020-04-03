import { IStep, IStepType, IBFAFlyingState, ICharacterStepStatus } from './i-bfa-flying-state';

const testSteps: Array<IStep> = [{
        criteriaId: 0,
        name: 'Test 1',
        steptype: IStepType.Achievement
    },
    {
        criteriaId: 1,
        name: 'Test 2',
        steptype: IStepType.Achievement
    },
    {
        criteriaId: 2,
        name: 'Test 3',
        steptype: IStepType.Achievement
    }];


export const initialBfaFlyingState: IBFAFlyingState = {
    steps: testSteps,
    characterSteps: [ ]
};
