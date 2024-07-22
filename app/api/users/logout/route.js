// app/api/users/logout/route.js
export async function GET(req) {
  const headers = {
    "Set-Cookie": [
      `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`,
      `loggedIn=; Path=/; Max-Age=0; SameSite=Strict`,
    ],
    "Content-Type": "application/json",
  };

  return new Response(JSON.stringify({ message: "Logout successful" }), {
    status: 200,
    headers,
  });
}
