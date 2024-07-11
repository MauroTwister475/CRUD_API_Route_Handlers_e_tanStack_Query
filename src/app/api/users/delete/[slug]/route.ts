import { api } from "@/app/api";
import { RouteProps } from "../../view/[slug]/route";

export async function DELETE(req: Request, { params: { slug } }: RouteProps) {
  try {
    const students = await api.delete(`/student/delete/${slug}`);
    return Response.json(students.data);
    
  } catch (error) {
    console.log("Erro: " + error);
    return Response.json(error);
  }
}
