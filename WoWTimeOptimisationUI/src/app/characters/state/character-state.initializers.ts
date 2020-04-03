import { ICharacter, ICharacterState } from './i-character-state';

const defaultCharacter1: ICharacter = {
    name: 'Khoria',
    realm: 'Moonglade',
    level: 120,
    blizzardId: 12345,
    active: true
}

const defaultCharacter2: ICharacter = {
    name: 'Flyte',
    realm: 'Moonglade',
    level: 120,
    blizzardId: 12345,
    active: true
}

const defaultCharacter3: ICharacter = {
    name: 'Numfundle',
    realm: 'Moonglade',
    level: 120,
    blizzardId: 12345,
    active: true
}

const defaultCharacter4: ICharacter = {
    name: 'Drakodemeza',
    realm: 'Moonglade',
    level: 120,
    blizzardId: 12345,
    active: true
}

const defaultCharacter5: ICharacter = {
    name: 'Flamingnora',
    realm: 'Moonglade',
    level: 120,
    blizzardId: 12345,
    active: true
}

const defaultCharacter6: ICharacter = {
    name: 'Sagemore',
    realm: 'Moonglade',
    level: 120,
    blizzardId: 12345,
    active: false
}

export const initialCharacterState: ICharacterState = {
    characters: [
        defaultCharacter1,
        defaultCharacter2,
        defaultCharacter3,
        defaultCharacter4,
        defaultCharacter5,
        defaultCharacter6,
    ]
};

