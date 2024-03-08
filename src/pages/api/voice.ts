// Importa los módulos necesarios
import type { APIRoute } from "astro";
import fetch from "node-fetch";

// Define la ruta POST para la autenticación
export const POST: APIRoute = async ({ request }) => {
    try {
        const converText = await request.text();

        if (!converText) {
            return new Response('Missing text', { status: 400 });
        }

        const apiKey = '892dba1923d5be2129b7cbe9a86828fc';
        const apiUrl = 'https://api.elevenlabs.io/v1/text-to-speech/zcAOhNBS3c14rBihAFp1?output_format=mp3_44100_64';

        const headers = {
            'xi-api-key': apiKey,
            'Content-Type': 'application/json'
        };

        const body = JSON.stringify({
            model_id: 'eleven_multilingual_v1',
            text: converText
        });

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch from Elevenlabs API with status: ${response.status}`);
        }

        // Assuming the response contains the audio content
        const audioContent = await response.buffer();

        // You can modify the response as needed
        return new Response(audioContent, {
            headers: {
                'Content-Type': 'audio/mpeg'
            }
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
};