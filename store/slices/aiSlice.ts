import { ItemSlice, ThemeSlice, FormDetailsSlice, AiSlice } from "@/types";
import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";

const INITIAL_MESSAGE = {
  content:
    "Welcome! How can I help you today? Choose an option below or type your own message:",
  role: "assistant",
  timestamp: new Date(),
  type: "options",
} as const;

export const createAiSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice & AiSlice,
  [],
  [],
  AiSlice
> = (set, get) => ({
  session: uuidv4(),
  isOpen: false,
  isAiThinking: false,
  messages: [INITIAL_MESSAGE],
  resetMessages: () =>
    set((state) => ({ ...state, messages: [INITIAL_MESSAGE] })),
  prompt: async (prompt) => {
    const { session, setAiThinking, items } = get();

    set((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          content: prompt,
          timestamp: new Date(),
          role: "user",
        },
      ],
    }));

    setAiThinking(true);

    const response = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({
        conversation: session,
        ...(items.length ? { currentState: items } : {}),
        prompt,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    setAiThinking(false);
    if (result.data) {
      set((state) => ({
        ...state,
        items: result.data,
        isAiThinking: false,
        isOpen: false,
      }));
    }
    set((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          content: result.data
            ? `${prompt} was processed successfully.`
            : "Something went wrong! Please try again later.",
          role: "assistant",
          timestamp: new Date(),
        },
      ],
    }));
  },
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
  setAiThinking: (thinking: boolean) =>
    set((state) => ({ ...state, isAiThinking: thinking })),
});
