import {GoogleGenAI} from '@google/genai'
import dotenv from 'dotenv'
dotenv.config(); 
const key = process.env.APIKEY;

const ai = new GoogleGenAI({apiKey:key})

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "olá ,tudo bem",
        config: {
          systemInstruction: "vocé é assistente virtual",
        },
      });
   console.log(response.text);
}

await main();