import { api } from "../../..";

export interface RouteProps {
  params: {
    slug: string;
  };
}

export async function GET(_req: Request, { params }: RouteProps) {
  try {
    const student = await api.get(`/student/${params.slug}`);
    return Response.json(student.data);
  } catch (error) {
    return Response.json({
      error: "Erro ao buscar na API",
    });
  }
}
