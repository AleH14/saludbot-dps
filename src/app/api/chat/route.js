import { OpenAI } from 'openai';

export const runtime = 'nodejs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//Prompt inicial
const initial_prompt = "Eres un asistente de salud de una clínica de atención primaria. Solo puedes contestar sobre: 1. Síntomas generales y orientación médica, 2. Especialidades médicas, 3. Servicios y atención en la clínica, 4. Prevención, bienestar y salud mental, 5. Información administrativa."

//End point para respuestas del chat
export async function POST(req) {
  const { mensaje } = await req.json();

  //Llamada a la API de OpenAI
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
    messages: [{ role: 'user', content: initial_prompt + mensaje }],
  });


  return Response.json({ respuesta: completion.choices[0].message.content });
}
