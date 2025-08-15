"use client";

import { InputForm } from "@/components/InputForm";
import { useChatContext } from "@/components/chat/ChatProvider";

/**
 * ChatInput - Input form wrapper with context integration
 * Handles message submission through context instead of prop drilling
 * Extracted from ChatMessagesView input section
 */
export function ChatInput(): React.JSX.Element {
  const { handleSubmit, isLoading, userId, sessionId } = useChatContext();

  // Check if user can send messages
  const canSendMessages = userId?.trim() && sessionId?.trim();
  
  // Show helpful message if user can't send messages
  const getDisabledMessage = (): string => {
    if (!userId?.trim()) {
      return "Please set your User ID in the header to start chatting";
    }
    if (!sessionId?.trim()) {
      return "Please create a session to start chatting";
    }
    return "";
  };

  return (
    <div className="relative z-10 flex-shrink-0 border-t-2 border-slate-600/80 bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-black/40">
      <div className="max-w-4xl mx-auto w-full p-4 pt-5">
        {!canSendMessages && (
          <div className="mb-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-amber-300 text-sm text-center">
              ⚠️ {getDisabledMessage()}
            </p>
          </div>
        )}
        <InputForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          context="chat"
          disabled={!canSendMessages}
        />
      </div>
    </div>
  );
}
