import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDj20jnk_Fo1A4mok3sSqUvRZCzT7Taf2Q";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(result.response.text());
  return response.text()
}

export default run;
