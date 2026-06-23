import groq from "../config/ai.js";
import { handleTools } from "../utils/toolHandler.js";
import { getTasks } from "./memoryService.js";

export const getAIResponse = async (message) => {
  try {
    const action = handleTools(message);

    const systemPrompt = `
You are a friendly personal AI assistant.

🎯 Personality:
- Talk like a real human assistant
- Keep responses natural and conversational
- Use short paragraphs (2–4 lines max)
- Avoid robotic bullet-only replies
- Keep things smooth, not overly structured

⚠️ Style Rules:
- No long essays
- No robotic phrases like "Task added successfully"
- Can use light emojis 👍 (not too many)
- Can ask small follow-ups
- Keep tone helpful and slightly casual

----------------------------------

Examples:

User: add gym at 6  
Response:
"Nice 👍 I've added 'gym at 6pm' for you. You're all set.

Do you want me to remind you as well?"

----------------------------------

You can:
• Add tasks  
• Delete tasks  
• Show tasks  
• Help plan the day  

----------------------------------

Current Tasks:
${JSON.stringify(getTasks(), null, 2)}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    let reply =
      completion.choices[0]?.message?.content ||
      "Hmm… I didn’t quite get that 😅";

    // ✨ ADD TASK
    if (action?.type === "ADD_TASK") {
      reply += `\n\nAll set 👍`;
    }

    // ✨ DELETE TASK
    if (action?.type === "DELETE_TASK") {
      reply += `\n\nDone. I’ve removed it 🗑`;
    }

    // ✨ SHOW TASKS
    if (action?.type === "GET_TASKS") {
      const tasks = action.payload;

      if (tasks.length === 0) {
        reply += `\n\nLooks like you don’t have anything lined up yet 👀`;
      } else {
        reply += `\n\nHere’s what you’ve got right now:\n${tasks
          .map(
            (t) => `• ${t.title} ${t.completed ? "✅" : ""}`
          )
          .join("\n")}`;
      }
    }

    return reply;
  } catch (error) {
    console.error("AI Error:", error);
    return "Oops 😅 something went wrong. Try again?";
  }
};