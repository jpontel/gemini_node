import type { GenerateEmbeddingResponseDto } from "./interfaces/generate-embedding-response.dto.js";
import type { GenerateEmbeddingDto } from "./interfaces/generate-embedding.dto.js";
import { EmbedContentResponse, GoogleGenAI } from "@google/genai";

export async function generateEmbedding(generateEmbeddingDto: GenerateEmbeddingDto): Promise<GenerateEmbeddingResponseDto> {
    const client = new GoogleGenAI({});

    const response: EmbedContentResponse = await client.models.embedContent({
        contents:generateEmbeddingDto.text,
        model:"gemini-embedding-001",
        config: {
            taskType:"RETRIEVAL_DOCUMENT"
        }
    });

    const generateEmbeddingResponseDto = {
        embeddings: response.embeddings
    } as GenerateEmbeddingResponseDto;

    return generateEmbeddingResponseDto;
}

