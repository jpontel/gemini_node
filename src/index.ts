import { generateEmbedding } from "./generate-embedding/generate-embedding.service.js";
import type { GenerateEmbeddingDto } from "./generate-embedding/interfaces/generate-embedding.dto.js";

import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
import type { GenerateContentDto } from "./generate-content/interfaces/generate-content.dto.js";
import { generateContent } from "./generate-content/generate-content.service.js";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT ?? '9001';

app.post('/generate-embedding', async (req: Request, res: Response) => {
    const text = req.body?.text;

    const generateEmbeddingDto: GenerateEmbeddingDto = {
        text: text
    };

    const embedding = await generateEmbedding(generateEmbeddingDto);

    res.send(embedding);
})

app.post('/generate-content', async (req: Request, res: Response) => {
    const text = req.body?.text;
    
    const generateContentDto: GenerateContentDto = {
        text: text
    };

    const response = await generateContent(generateContentDto);

    res.send(response);
})

app.listen(port, () => {
    console.log('Gemini Express API - Rodando na porta: ', port);
})