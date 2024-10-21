export interface ResponseText {
        uid: string;
        inputText: string;
        sentences: Sentence[]
        overAllLabel: Classification;
        overAllScore: number;
}

export interface Sentence {
        sentence: string;
        class: Classification;
        score: number;
}

export enum Classification {
        AI = "AI",
        HUMAN = "HUMAN"
}
