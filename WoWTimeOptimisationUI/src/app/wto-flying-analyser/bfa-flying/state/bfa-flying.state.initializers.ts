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

const characterStatusStep1: ICharacterStepStatus = {
    characterName: 'Khoria',
    characterSteps:  [{
        criteriaId: 0,
        amount: 12,
        isComplete: true
    },
    {
        criteriaId: 1,
        amount: 10,
        isComplete: false
    }]
};

const characterStatusStep2: ICharacterStepStatus = {
    characterName: 'Khorylle',
    characterSteps:  [{
        criteriaId: 0,
        amount: 1,
        isComplete: false
    },
    {
        criteriaId: 1,
        amount: 111,
        isComplete: false
    },
    {
        criteriaId: 2,
        amount: 111,
        isComplete: false
    }]
};

export const initialBfaFlyingState: IBFAFlyingState = {
    steps: testSteps,
    characterSteps: [ characterStatusStep1 , characterStatusStep2 ]
};
