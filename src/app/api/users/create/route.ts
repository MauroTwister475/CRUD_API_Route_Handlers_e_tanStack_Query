import { api } from "../..";

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();
    const newStudent = await api.post("/student/create", data);

    return Response.json(newStudent.data);
  } catch (error) {
    return Response.json(error);
  }
}
