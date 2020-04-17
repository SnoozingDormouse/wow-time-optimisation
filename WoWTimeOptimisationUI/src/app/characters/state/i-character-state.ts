export interface ICharacterState {
    activeCharFaction: number;
    characters: Array<ICharacter>
}

export interface ICharacter {
    useraccountId?: number;
    name: string;
    realm: string;
    faction?: number;
    characterClass?: string;
    race?: string;
    level?: number;
    blizzardId?: number;
    lastUpdatedDateTime?: Date;
    active?: boolean;
}
