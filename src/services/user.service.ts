import { api } from "@/app/api";
import { User } from "@/types/user";

export async function createUserService(user: string) {
  return await api.post("/student/create", {
    name: user,
    class: "12",
  });
}

export async function deleteUserService(id: string) {
  return await api.delete(`/student/delete/${id}`);
}

export async function updateUserService(user: User) {
  return await api.put(`/student/update/${user.id}`, {
    name: user.name,
    class: "12",
  });
}
