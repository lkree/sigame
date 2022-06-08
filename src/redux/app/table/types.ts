export type Question = {
    id: number;
    text: string;
    payment: number;
    type: string;
    enabled: boolean;
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
