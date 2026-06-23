import groq from "../config/ai.js";
import { handleTools } from "../utils/toolHandler.js";
import { getTasks } from "./memoryService.js";

export const getAIResponse = async (message) => {
  try {
    const action = handleTools(message);

    const systemPrompt = `
You are a personal AI assistant.

⚠️ VERY IMPORTANT RESPONSE RULES:
- Do NOT write long paragraphs
- Always respond in SHORT structured format
- Use bullet points or sections when possible
- Keep responses clean and readable
- Sound like a smart assistant, not an essay writer

FORMAT STYLE EXAMPLES:

Good:
- Task added ✅
- Next step: start at 6pm

Bad:
"This task has been successfully added and you should consider..."

----------------------------------

You can:
- Add tasks
- Show tasks
- Help plan day
- Give suggestions

----------------------------------

Current tasks:
${JSON.stringify(getTasks(), null, 2)}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    let reply = completion.choices[0]?.message?.content || "No response";

    // TOOL RESPONSES (force structured)
    if (action?.type === "GET_TASKS") {
      reply += `\n\n📋 Tasks:\n${action.payload
        .map((t) => `• ${t.title} ${t.completed ? "✅" : ""}`)
        .join("\n")}`;
    }

    if (action?.type === "ADD_TASK") {
      reply += `\n\n✅ Task added`;
    }

    return reply;
  } catch (error) {
    console.error("AI Error:", error);
    return "⚠️ Error. Try again.";
  }
};