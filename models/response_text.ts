export interface ResponseText {
        uid: string;
        inputText: string;
        sentences: Sentence[]
        overAllLabel: Classification;
        overallScore: number;
}

export interface Sentence {
        sentence: string;
        class: Classification;
        score: number;
        startIndex: number;
        endIndex: number;
}

export enum Classification {
        AI = "AI",
        HUMAN = "HUMAN"
}
