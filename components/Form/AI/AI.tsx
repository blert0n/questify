import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Send,
  X,
  Sparkles,
  ClipboardList,
  MessageSquare,
  CalendarCheck,
} from "lucide-react";
import { useFormSelectors } from "@/store";

interface ChatOption {
  id: string;
  text: string;
  icon: React.ReactNode;
  prompt: string;
}

const chatOptions: ChatOption[] = [
  {
    id: "1",
    text: "Create an order form",
    icon: <ClipboardList className="h-4 w-4" />,
    prompt: "Create a form for ordering cakes, food, or other products.",
  },
  {
    id: "2",
    text: "Create a feedback survey",
    icon: <MessageSquare className="h-4 w-4" />,
    prompt: "Generate a customer feedback or satisfaction survey form.",
  },
  {
    id: "3",
    text: "Create an event registration form",
    icon: <CalendarCheck className="h-4 w-4" />,
    prompt: "Build a form to register attendees for an event or workshop.",
  },
];

export default function AI() {
  const messages = useFormSelectors.use.messages();
  const prompt = useFormSelectors.use.prompt();
  const isOpen = useFormSelectors.use.isOpen();
  const isAiThinking = useFormSelectors.use.isAiThinking();
  const open = useFormSelectors.use.open();
  const close = useFormSelectors.use.close();
  const setAiThinking = useFormSelectors.use.setAiThinking();
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleOptionSelect = (option: ChatOption) => {
    setAiThinking(true);
    void prompt(option.prompt);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    void prompt(input);
    setInput("");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAiThinking]);

  return (
    <div>
      <Button
        onClick={() => open()}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 z-50 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        size="icon"
      >
        <Sparkles className="h-6 w-6" />
      </Button>

      <div
        className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border transition-all duration-300 ease-in-out transform z-50 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">AI Assistant</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => close()}
            className="h-8 w-8 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4 h-[380px]">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.timestamp.toString()}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex justify-start items-center">
                <div className="max-w-[90%] space-y-2">
                  {chatOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      onClick={() => handleOptionSelect(option)}
                      className="w-full justify-start gap-2 h-auto p-3 text-left hover:bg-purple-50 hover:border-purple-300 transition-colors"
                    >
                      {option.icon}
                      <span className="text-sm">{option.text}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {isAiThinking && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 p-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-600">
                      AI is thinking
                    </span>
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-2 border-t">
          <div className="flex gap-2 items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your prompt..."
              className="flex-1"
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter" && !isAiThinking) {
                  handleSendMessage();
                }
              }}
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              disabled={isAiThinking}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 transition-opacity duration-300 z-40"
          onClick={() => close()}
        />
      )}
    </div>
  );
}
