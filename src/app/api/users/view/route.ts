import { api } from "@/app/api";

export async function GET(req: Request, res: Response) {
  try {
    const students = await api.get("student/view");
    return Response.json(students.data);
  } catch (error) {
    console.log("Erro: " + error);
    return Response.json(error);
  }
}
