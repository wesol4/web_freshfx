
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { NAME, ROLES, ABOUT_TEXT, SKILLS, PROJECTS } from '../constants';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        
        const context = `
          Name: ${NAME}
          Roles: ${ROLES.join(', ')}
          About: ${ABOUT_TEXT}
          Skills: ${SKILLS.map(s => s.name).join(', ')}
          Projects:
          ${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}
        `;

        const systemInstruction = `You are a friendly and professional AI assistant for the portfolio website of ${NAME}. Your goal is to answer questions from visitors about ${NAME}'s skills, projects, and experience. Use the following information to answer questions. Do not make up information. If you don't know the answer, say that you don't have that information. Keep your answers helpful and concise. Start the conversation by introducing yourself and offering help.

        CONTEXT:
        ---
        ${context}
        ---
        `;
        
        const chatInstance = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: systemInstruction,
            },
        });
        setChat(chatInstance);
        
        // Start conversation with a message from the bot
        const response = await chatInstance.sendMessageStream({ message: "Hello!" });
        setIsLoading(true);
        let botResponse = '';
        setMessages([{ sender: 'bot', text: '' }]);
        for await (const chunk of response) {
            botResponse += chunk.text;
            setMessages([{ sender: 'bot', text: botResponse }]);
        }
        setIsLoading(false);

      } catch (error) {
        console.error("Failed to initialize chatbot:", error);
        setMessages([{ sender: 'bot', text: "Sorry, I'm having trouble connecting right now." }]);
      }
    };

    initChat();
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage, { sender: 'bot', text: '' }]);
    setInput('');
    setIsLoading(true);

    try {
        const responseStream = await chat.sendMessageStream({ message: input });
        let currentBotMessage = '';
        for await (const chunk of responseStream) {
            currentBotMessage += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { sender: 'bot', text: currentBotMessage };
                return newMessages;
            });
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { sender: 'bot', text: 'Oops! Something went wrong.' };
            return newMessages;
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full bg-[#c770f0] text-white shadow-lg hover:bg-opacity-80 focus:outline-none transition-all duration-300 transform hover:scale-110"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 left-5 z-50 w-full max-w-sm h-[60vh] bg-[#11072B] bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden animate-fade-in-up">
          <header className="p-4 border-b border-white/10 flex justify-between items-center">
            <h3 className="font-bold text-lg text-white">AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-[#c770f0] text-white rounded-br-none' : 'bg-gray-700/50 text-gray-200 rounded-bl-none'}`}>
                    {msg.text || <span className="animate-pulse">...</span>}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-800/80 border border-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c770f0]"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="p-3 rounded-full bg-[#c770f0] text-white disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-opacity-80 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: 'rotate(90deg)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
          
          <style>{`
            @keyframes fade-in-up {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Chatbot;
