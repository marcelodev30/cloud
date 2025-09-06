import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import dotenv from "dotenv"
dotenv.config(); 
const key = process.env.APIKEY;
const url = process.env.URLKEY;

const client = ModelClient(url, new AzureKeyCredential(key));

const response = await client.path("/chat/completions").post({
    body: {
      messages: [{ role: "user", content: "olá tudo bem ??" }],
    },
  });
  

  
  console.log(response.body.choices);
