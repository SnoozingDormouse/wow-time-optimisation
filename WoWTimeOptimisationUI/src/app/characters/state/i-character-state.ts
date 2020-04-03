export interface ICharacterState {
    characters: Array<ICharacter>
}

export interface ICharacter {
    name: string;
    realm: string;
    level?: number;
    blizzardId?: number;
    active?: boolean;
}
