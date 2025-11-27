import { GoogleGenAI } from "@google/genai";
import type { GenerateContentDto } from "./interfaces/generate-content.dto.js";
import type { GenerateContentResponseDto } from "./interfaces/generate-content-response.dto.js";

export async function generateContent(generateContentDto: GenerateContentDto) {
    const client = new GoogleGenAI({});

    const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: generateContentDto.text,
        config:generateContentDto.configs ?? {}
    });

    const generateContentResponseDto = {
        text: response.text
    } as GenerateContentResponseDto; 

    return generateContentResponseDto;
}