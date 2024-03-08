// Importa los módulos necesarios
import type { APIRoute } from "astro";

// Define las credenciales permitidas
const allowedUsername = "Icker Álvarez";
const allowedPassword = "Icker1234";

// Define la ruta POST para la autenticación
export const POST: APIRoute = async ({ request }) => {
  try {
    // Verifica que sea una solicitud POST
    if (request.method === "POST") {
      // Lee los datos del cuerpo de la solicitud
      const body = await request.json();

      // Verifica si los datos coinciden con las credenciales permitidas
      if (
        body.username === allowedUsername &&
        body.password === allowedPassword
      ) {
        // Devuelve una respuesta exitosa si las credenciales son correctas
        return new Response("Inicio de sesión exitoso", { status: 200 });
      } else {
        // Devuelve una respuesta no autorizada si las credenciales son incorrectas
        return new Response("Credenciales incorrectas", { status: 401 });
      }
    } else {
      // Devuelve una respuesta no permitida si la solicitud no es POST
      return new Response("Método no permitido", { status: 405 });
    }
  } catch (error) {
    // Devuelve una respuesta de error en caso de problemas con la solicitud
    console.log(error);
    return new Response("Error en la solicitud", { status: 500 });
  }
};