export type Question = {
    id: number;
    text: string;
    payment: number;
    type: string;
}

export type Questions = {
    data: {
        [level: string]: {
            themeName: string;
            level: number;
            questions: Question[];
        }[];
    };
};
