
export type Story = {
    id: string;
    characterImageSrc: string;
    characterName: string;
    talks: Talk[];
};
export type Talk = {
    message: string;
};