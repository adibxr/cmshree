import { GoogleGenAI } from "@google/genai";

export const generateSchoolAnnouncement = async (topic: string, tone: 'formal' | 'cheerful' | 'urgent'): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Write a school announcement for "CM SHRI School, Sector 5 Dwarka" about: ${topic}. 
    Tone: ${tone}. 
    Keep it concise (under 100 words). 
    Format nicely with a clear subject line and body.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Could not generate announcement.";
  } catch (error) {
    console.error("Gemini Generate Error:", error);
    return "Error generating content. Please check the API key configuration.";
  }
};

export const chatWithSchoolAssistant = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const systemInstruction = `You are the AI Assistant for CM SHRI School (formerly RPVV), Sector 5 Dwarka, New Delhi. 
    This school is also known as Dr. B.R. Ambedkar School of Specialised Excellence (ASoSE) Sector 5.
    
    **CORE SCHOOL INFORMATION:**
    - **Name:** CM SHRI School, Sector 5 Dwarka (Dr. B.R. Ambedkar ASoSE).
    - **Head of School / Principal:** Ms. Monika Batra.
    - **Address:** Sector 5, Dwarka, New Delhi - 110075.
    - **Contact:** +91 11 2508 0096 | Email: devadibxr@gmail.com.
    - **Office Hours:** Monday to Saturday, 8:00 AM - 2:30 PM.
    
    **ADMISSIONS:**
    - Admissions are processed through the Directorate of Education (DoE) portal.
    - Link: https://edudel.nic.in/CMSHRIApp/Home.aspx
    
    **WEBSITE SECTIONS:**
    - ERP Portal (Staff only), Mandatory Disclosure (official docs), Student Handbook, RTI, and Bug Reporting.
    
    **GUIDELINES:**
    - Be helpful, polite, and concise.
    - Always highlight the commitment to "Excellence in Specialised Education".
    - Direct users to the "Mandatory Disclosure" section for documents like Fire Safety or Academic Calendar.
    `;

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
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
    return "I am currently experiencing technical difficulties. Please try again later.";
  }
};