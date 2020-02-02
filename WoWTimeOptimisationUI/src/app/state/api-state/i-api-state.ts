export interface IAPIState {
    isLoadingData: string;
}

export const initialAPIState: IAPIState = {
    isLoadingData: JSON.stringify(false)
};
