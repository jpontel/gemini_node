import type { GenerateContentConfig } from "@google/genai";

export interface GenerateContentDto {
    text: string;
    configs?: GenerateContentConfig;
}