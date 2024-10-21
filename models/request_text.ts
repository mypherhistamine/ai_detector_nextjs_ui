export interface RequestText {
        timeStamp: number; //in epoch style
        inputText: string;
        userId: string; //user's unique id
        sampleTextType: SampleTextType;
}

export enum SampleTextType {
        USER = "USER",
        AI_AND_HUMAN = "AI_AND_HUMAN",
        CHAT_GPT = "CHAT_GPT",
        GPT4 = "GPT4",
        CLAUDE = "CLAUDE",
        GEMINI = "GEMINI"
}

