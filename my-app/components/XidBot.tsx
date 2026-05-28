"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { XIDBOT_FLOWS, BotStep } from "@/utils/xidbot";

import { useLanguage } from "@/components/TranslateButton";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

export default function Xidbot() {
  const { idioma } = useLanguage();
  
  const currentFlow = XIDBOT_FLOWS[idioma] || XIDBOT_FLOWS.es;

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<BotStep>(currentFlow.inicio);
  const [isFinished, setIsFinished] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: "initial-msg",
        sender: "bot",
        text: currentFlow.inicio.question,
      },
    ]);
    setCurrentStep(currentFlow.inicio);
    setIsFinished(false);
  }, [idioma, currentFlow.inicio]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option: { text: string; nextStep: string; result?: string }) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: option.text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      if (option.nextStep === "fin" && option.result) {
        const recommendationPrefix = idioma === "en" ? "Here is my recommendation:" : "Acá tenes mi recomendación:";
        const restartQuestion = idioma === "en" ? "¿Would you like to start a new inquiry?" : "¿Te gustaría empezar una nueva consulta?";
        
        const botFinalMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `${recommendationPrefix} ${option.result}\n\n${restartQuestion}`,
        };
        setMessages((prev) => [...prev, botFinalMessage]);
        setIsFinished(true);
      } else {
        const nextTarget = currentFlow[option.nextStep];
        if (nextTarget) {
          setCurrentStep(nextTarget);
          const botNextMessage: Message = {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: nextTarget.question,
          };
          setMessages((prev) => [...prev, botNextMessage]);
        }
      }
    }, 600);
  };

  const handleRestart = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "bot",
        text: currentFlow.inicio.question,
      },
    ]);
    setCurrentStep(currentFlow.inicio);
    setIsFinished(false);
  };

  return (
    <div className="flex flex-col w-full max-w-md h-[600px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 font-sans">
      
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Icon icon="lucide:bot" className="w-6 h-6 text-cyan-400" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight tracking-wide">Xidbot</h2>
            <p className="text-xs text-blue-200">
              {idioma === "en" ? "Smart Security Advisor" : "Asesor de Seguridad Inteligente"}
            </p>
          </div>
        </div>
        {(isFinished || messages.length > 1) && (
          <button 
            onClick={handleRestart}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            title={idioma === "en" ? "Restart chat" : "Reiniciar conversación"}
          >
            <Icon icon="lucide:refresh-cw" className="w-5 h-5 text-white" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none whitespace-pre-line"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      
      <div className="p-4 bg-slate-950 border-t border-slate-800 min-h-[100px] flex items-center justify-center">
        <div className="w-full space-y-2">
          {!isFinished ? (
            <div className="flex flex-col gap-2">
              {currentStep?.options?.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-xl text-sm transition-all text-slate-300 hover:text-white flex items-center justify-between group"
                >
                  <span>{option.text}</span>
                  <Icon icon="lucide:chevron-right" className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.button
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              onClick={handleRestart}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <Icon icon="lucide:play" className="w-4 h-4" />
              {idioma === "en" ? "Start New Inquiry" : "Iniciar Nueva Consulta"}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}