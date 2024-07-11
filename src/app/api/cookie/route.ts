import { cookies } from "next/headers";

export async function GET() {
  const cookie = cookies().get("token");

  return Response.json(cookie?.name);
}
