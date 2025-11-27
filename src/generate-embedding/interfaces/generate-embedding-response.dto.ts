import type { ContentEmbedding } from "@google/genai";

export interface GenerateEmbeddingResponseDto {
    embeddings?: ContentEmbedding[];
}