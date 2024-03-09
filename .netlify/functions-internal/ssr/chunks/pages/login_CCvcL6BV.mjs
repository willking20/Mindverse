const allowedUsername = "Icker Álvarez";
const allowedPassword = "Icker1234";
const POST = async ({ request }) => {
  try {
    if (request.method === "POST") {
      const body = await request.json();
      if (body.username === allowedUsername && body.password === allowedPassword) {
        return new Response("Inicio de sesión exitoso", { status: 200 });
      } else {
        return new Response("Credenciales incorrectas", { status: 401 });
      }
    } else {
      return new Response("Método no permitido", { status: 405 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Error en la solicitud", { status: 500 });
  }
};

export { POST };
