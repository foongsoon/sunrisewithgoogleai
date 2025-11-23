import { GoogleGenAI } from "@google/genai";
import { CONTACT_INFO, CONTENT } from '../constants';
import { Language } from "../types";

// Helper to construct the system instruction based on language
const getSystemInstruction = (lang: Language): string => {
  const c = CONTENT[lang];
  return `You are a helpful, warm, and professional AI assistant for "Sunrise Education" (www.sun.edu.my).
  
  Your goal is to assist parents and students with information about the centre.
  
  Key Information:
  - Name: Sunrise Education
  - Address: ${CONTACT_INFO.address}
  - Phone/WhatsApp: ${CONTACT_INFO.phone}
  - Email: ${CONTACT_INFO.email}
  - Curriculum: Cambridge IGCSE (Primary and Secondary).
  - Tone: Encouraging, educational, professional, and welcoming ("Wonderful content").
  
  Language: Respond in ${lang === 'en' ? 'English' : 'Chinese (Simplified)'}.
  
  Details from the website:
  - Primary: ${c.syllabus.primaryDesc}
  - Secondary: ${c.syllabus.secondaryDesc}
  - Philosophy: ${c.about.philosophyDesc}
  
  If asked about pricing or specific enrollment dates not listed here, kindly suggest they contact the office via WhatsApp at ${CONTACT_INFO.phone}.
  Keep answers concise (under 100 words) unless asked for details.
  `;
};

export const generateAIResponse = async (userMessage: string, lang: Language): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("Gemini API Key is missing.");
      return lang === 'en' 
        ? "I'm currently offline (API Key missing). Please contact the office directly!" 
        : "我现在离线（缺少 API 密钥）。请直接联系办公室！";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-2.5-flash for speed and efficiency for a chat widget
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: getSystemInstruction(lang),
        temperature: 0.7,
      }
    });

    return response.text || (lang === 'en' ? "I couldn't generate a response." : "我无法生成回复。");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'en' 
      ? "Sorry, I'm having trouble connecting right now. Please try again later."
      : "抱歉，我现在连接有问题。请稍后再试。";
  }
};
