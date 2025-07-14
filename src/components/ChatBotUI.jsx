"use client"
import { useState } from "react";
import { Send } from "react-bootstrap-icons";

export default function ChatBotUI(){

    //Mensaje inicial
    const [messages, setMessages] = useState([
    { role: "bot", content: "Hola, soy tu asistente de salud. ¿En qué puedo ayudarte hoy?" },
  ]);


  const [input, setInput] = useState("");


  //Función de envío
  const handleSend = async () => {
    setInput("");

    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    

    // Respuesta del bot
   const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje: input }),
    });

    const data = await res.json(); 

    setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.respuesta },
      ]);
    
  };

  return (
    <div className="container-fluid d-flex flex-column vh-100 bg-light p-3">
      <h2 className="text-center text-success mb-3">Asistente de Salud</h2>

      <div className="card flex-grow-1 overflow-auto mb-3">
        <div className="card-body d-flex flex-column gap-3 overflow-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-3 shadow-sm ${
                msg.role === "user" ? "bg-success text-white align-self-end" : "bg-white text-dark align-self-start"
              } max-w-75`}
              style={{ maxWidth: "75%" }}
            >
              {msg.content}
            </div>
          ))}
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
          className="form-control"
        />
        <button type="submit" className="btn btn-success d-flex align-items-center">
          <Send className="me-1"/> Enviar
        </button>
      </form>
    </div>
  );
} 