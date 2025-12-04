import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

export const generateSchoolAnnouncement = async (topic: string, tone: 'formal' | 'cheerful' | 'urgent'): Promise<string> => {
  try {
    const prompt = `Write a school announcement for "CM SHRI School, Sector 5 Dwarka" about: ${topic}. 
    Tone: ${tone}. 
    Keep it concise (under 100 words). 
    Format nicely.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Could not generate announcement.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating content. Please check your API key.";
  }
};

export const chatWithSchoolAssistant = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  try {
    const systemInstruction = `You are the AI Assistant for CM SHRI School (formerly RPVV), Sector 5 Dwarka, New Delhi.
    
    Context:
    - This is a premier government school under the PM SHRI scheme.
    - Location: Sector 5, Dwarka, Delhi.
    - Admissions: Conducted via edudel.nic.in.
    - Facilities: STEM Labs, Digital Library, Sports Complex.
    
    If asked about Attendance or Resources, direct them to click the "ERP Portal" button in the menu.
    Keep answers very brief, professional, and helpful.`;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: { systemInstruction },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I didn't catch that.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};