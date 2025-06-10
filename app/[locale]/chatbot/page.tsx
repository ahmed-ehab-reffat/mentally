"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import dynamic from "next/dynamic";

import { Smile, Send } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

type EmojiData = {
  emoji: string;
};

export default function Chatbot() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const t = useTranslations("Chatbot");

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: `api/chat`,
    initialMessages: [
      {
        id: "1",
        content: t("first message"),
        role: "assistant",
      },
    ],
    body: {
      system:
        "You are a helpful mental health assistant. Provide supportive and empathetic responses, but always encourage users to seek professional help for serious concerns.",
    },
    onError: () => {
      alert(t("error"));
    },
  });

  const handleEmojiClick = (emojiData: EmojiData) => {
    handleInputChange({
      target: { value: input + emojiData.emoji },
    } as React.ChangeEvent<HTMLInputElement>);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-4rem)] bg-[#F8FAFC]">
      <header className="flex items-center gap-3 text-sm text-gray-600 px-6 py-4 bg-[#E2E8F0] border-b">
        <div>
          <h1 className="font-bold">Dr. Mentally</h1>
          <p>{t("online")}</p>
        </div>
      </header>

      <div
        className="flex-1 overflow-y-auto p-6"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f0f0f0' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-[80%] rounded-[20px] px-6 py-3 ${
                message.role === "assistant"
                  ? "bg-[#F3E8D6] text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#E2E8F0] relative">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="absolute ltr:left-4 rtl:right-4 text-purple-400"
            aria-label="Open emoji picker"
          >
            <Smile className="w-6 h-6" />
          </button>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Write your message"
            className="w-full pl-12 pr-12 py-6 rounded-full bg-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600"
          />
          <button
            type="submit"
            className="absolute ltr:right-4 rtl:left-4"
            disabled={status === "submitted" || !input.trim()}
            aria-label="Send message"
          >
            <Send className="w-6 h-6 text-blue-500" />
          </button>
        </form>

        {showEmojiPicker && (
          <div className="absolute bottom-full left-0 mb-2 z-50">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
}
