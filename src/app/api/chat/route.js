import { OpenAI } from 'openai';

export const runtime = 'nodejs';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//Prompt inicial
const initial_prompt = "Eres un asistente de salud de una clínica de atención primaria. Solo puedes contestar sobre: 1. Síntomas generales y orientación médica, 2. Especialidades médicas, 3. Servicios y atención en la clínica, 4. Prevención, bienestar y salud mental, 5. Información administrativa."
let history = initial_prompt;


//End point para respuestas del chat
export async function POST(req) {
  const { mensaje } = await req.json();

  history += '\n Mensaje del usuario: ' + mensaje;

  //Llamada a la API de OpenAI
  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1-nano',
    messages: [{ role: 'user', content: history }],
  });
  // Agregar la respuesta al historial
  const response = completion.choices[0].message.content;
   history += '\n Respuesta: ' + response;

  return Response.json({ respuesta: response });
}
