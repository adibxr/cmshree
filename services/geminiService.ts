import { GoogleGenAI } from "@google/genai";

export const generateSchoolAnnouncement = async (topic: string, tone: 'formal' | 'cheerful' | 'urgent'): Promise<string> => {
  try {
    // Initialize inside function to ensure environment variable is ready and to prevent stale instances
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
    console.error("Gemini Generate Error:", error);
    return "Error generating content. Please check the API key configuration.";
  }
};

export const chatWithSchoolAssistant = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  try {
    // Initialize inside function to ensure environment variable is ready
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const systemInstruction = `You are the AI Assistant for CM SHRI School (formerly RPVV), Sector 5 Dwarka, New Delhi.
    
    **CORE SCHOOL INFORMATION:**
    - **Name:** CM SHRI School, Sector 5 Dwarka (Under PM SHRI Scheme).
    - **Head of School / Principal:** Ms. Monika Batra.
    - **Address:** Sector 5, Dwarka, New Delhi - 110075.
    - **Contact:** +91 11 2508 0096 | Email: devadibxr@gmail.com.
    - **Office Hours:** Monday to Saturday, 8:00 AM - 2:30 PM.
    
    **ADMISSIONS:**
    - Conducted via the Directorate of Education (DoE) portal.
    - Link: https://edudel.nic.in/CMSHRIApp/Home.aspx
    
    **WEBSITE SECTIONS & FEATURES:**
    1. **ERP Portal (Staff Only):** 
       - Located in the header. Requires an access code.
       - Contains modules for **Attendance** (https://adibxrreco.vercel.app) and **Issue Resources** (https://adibxrrecolabs.vercel.app).
       - If asked about marking attendance or managing labs, direct users here.
    
    2. **Mandatory Disclosure:**
       - Contains official documents: Water Health Report, Building Safety Map, Rain Water Harvesting, Fire Safety Certificate, Academic Calendar, and Fee Structure.
    
    3. **Student Handbook:**
       - A digital guide available directly on the website (embedded presentation).
    
    4. **RTI (Right to Information):**
       - Users can submit RTI applications and attach photos/documents via the "Right to Information" link in the footer.
    
    5. **Report a Bug / Developer Info:**
       - The website is developed by **Aditya Raj** (Full Stack Developer).
       - Users can view his profile and report technical issues via the "Report a Bug" link.
    
    **SOCIAL MEDIA:**
    - **YouTube:** @asose.rpvvsec5official
    - **Instagram:** @cmshrisec5dwarka
    - **Facebook:** CM-SHRI-Sector-5-Dwarka
    - **Twitter (X):** @RPVV_ASOSE_dwk5
    
    **GUIDELINES:**
    - Keep answers concise, professional, and helpful.
    - If asked about specific documents (like Fire Safety), mention they are in the "Mandatory Disclosure" section.
    - If asked about the principal, always refer to **Ms. Monika Batra**.
    `;

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
    return "I am currently experiencing technical difficulties connecting to the server. Please try again later.";
  }
};