// Importa los módulos necesarios
import type { APIRoute } from "astro";
// Importa Openai
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: "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"
});

// Define la ruta POST para la autenticación
export const POST: APIRoute = async ({ request }) => {
    try {
        const question = await request.text();

        if (!question) {
            return new Response('Missing question', { status: 400 });
        }


        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    "role": "system",
                    "content": 'Eres un maestro distinguido de niños con dificultades para estudiar, experto en interpretar y responder preguntas; genera una respuesta para una pregunta rodeada con las etiquetas <question></question>; para que un alumno con inteligencia de tipo kinestésica lo pueda comprender fácilmente, es decir, adecua la explicación a la inteligencia kinestésica respondiendo a sus consultas en formato de tutoría adaptándose a la manera en la que él aprende.'
                },
                {
                    "role": "user",
                    "content": `<question>${question}</question>`
                }
            ]
        });

        const responseData = response.choices[0].message.content;

        return new Response(JSON.stringify({
            response: responseData
        }));
    } catch (error) {
        console.error('Error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
};
