import { api } from "@/app/api";
import { RouteProps } from "../../view/[slug]/route";

export async function PUT(req: Request, { params: { slug } }: RouteProps) {
  try {
    const newData = await req.json();

    const updatedStudent = await api.put(`/student/update/${slug}`, newData);
    return Response.json(updatedStudent.data);
  } catch (error) {
    return Response.json(error);
  }
}
