"use client"
import { useState } from "react";
import { Send, Clipboard, HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import ReactMarkdown from "react-markdown";

export default function ChatBotUI(){

  // Componente de animación de carga
  const LoadingAnimation = () => (
    <div className="d-flex align-items-center align-self-start p-2 rounded-3 shadow-sm bg-white text-dark" style={{ maxWidth: "75%" }}>
      <div className="d-flex align-items-center">
        <span className="me-2">Escribiendo</span>
        <div className="d-flex">
          <div className="loading-dot" style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#6c757d',
            borderRadius: '50%',
            marginRight: '2px',
            animation: 'loadingDot 1.4s infinite ease-in-out both',
            animationDelay: '0s'
          }}></div>
          <div className="loading-dot" style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#6c757d',
            borderRadius: '50%',
            marginRight: '2px',
            animation: 'loadingDot 1.4s infinite ease-in-out both',
            animationDelay: '0.16s'
          }}></div>
          <div className="loading-dot" style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#6c757d',
            borderRadius: '50%',
            animation: 'loadingDot 1.4s infinite ease-in-out both',
            animationDelay: '0.32s'
          }}></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes loadingDot {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );

    //Mensaje inicial
    const [messages, setMessages] = useState([
    { role: "bot", content: "Hola, soy tu asistente de salud. ¿En qué puedo ayudarte hoy?" },
  ]);


  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reactions, setReactions] = useState({}); // Para almacenar likes/dislikes por mensaje

  // Función para copiar texto al portapapeles
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Aquí podrías agregar una notificación de éxito
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  // Función para manejar like/dislike
  const handleReaction = (messageIndex, reactionType) => {
    setReactions(prev => ({
      ...prev,
      [messageIndex]: prev[messageIndex] === reactionType ? null : reactionType
    }));
  };


  //Función de envío
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setIsLoading(true);

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    

    // Respuesta del bot
   const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje: userMessage }),
    });

    const data = await res.json(); 

    setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.respuesta },
      ]);
    
    setIsLoading(false);
    
  };

  return (
    <div className="container-fluid d-flex flex-column vh-100 bg-light p-3">
      <h2 className="text-center text-success mb-3">Asistente de Salud</h2>

      <div className="card flex-grow-1 overflow-auto mb-3">
        <div className="card-body d-flex flex-column gap-3 overflow-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`${
                msg.role === "user" ? "align-self-end" : "align-self-start"
              }`}
              style={{ maxWidth: "75%" }}
            >
              <div
                className={`p-2 rounded-3 shadow-sm ${
                  msg.role === "user" ? "bg-success text-white" : "bg-white text-dark"
                }`}
              >
                {msg.role === 'user' ? (
                  <>
                    {msg.content}
                  </>
                ) : (
                  <ReactMarkdown>
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
              
              {/* Botones de acción solo para mensajes del bot */}
              {msg.role === "bot" && (
                <div className="d-flex gap-1 mt-1">
                  <button
                    onClick={() => copyToClipboard(msg.content)}
                    className="btn btn-sm btn-outline-secondary d-flex align-items-center"
                    title="Copiar mensaje"
                  >
                    <Clipboard size={12} />
                  </button>
                  
                  <button
                    onClick={() => handleReaction(i, 'like')}
                    className={`btn btn-sm ${
                      reactions[i] === 'like' ? 'btn-success' : 'btn-outline-success'
                    } d-flex align-items-center`}
                    title="Me gusta"
                  >
                    <HandThumbsUp size={12} />
                  </button>
                  
                  <button
                    onClick={() => handleReaction(i, 'dislike')}
                    className={`btn btn-sm ${
                      reactions[i] === 'dislike' ? 'btn-danger' : 'btn-outline-danger'
                    } d-flex align-items-center`}
                    title="No me gusta"
                  >
                    <HandThumbsDown size={12} />
                  </button>
                </div>
              )}
            </div>
          ))}
          {isLoading && <LoadingAnimation />}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="d-flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu consulta médica..."
          className="form-control ms-5"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="btn btn-success d-flex align-items-center"
          disabled={isLoading}
        >
          <Send className="me-1"/> {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
} 