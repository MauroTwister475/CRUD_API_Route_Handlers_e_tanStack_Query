"use client";
import { api } from "@/app/api";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

interface UserListProps {
  name: string;
  onSetName: (name: string) => void;
  onDeleteUser: (id: string) => void;
  onUpdateUser: (user: User) => void;
}

export function UserList({
  onDeleteUser,
  onUpdateUser,
  name,
  onSetName,
}: UserListProps) {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await api.get<User[]>("/student/view");
      return users.data;
    },
  });

  function handleUpdateUser(user: User) {
    onUpdateUser({ id: user.id, name: name });
    onSetName("");
  }

  if (isLoading) {
    return <h3>Buscando dados...</h3>;
  }

  if (isError) {
    return <h3>ocorreu um erro ao buscar os dados da API...</h3>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h3>LISTAGEM DOS USUARIOS</h3>
      {users?.map((user) => (
        <div key={user.id} style={{ display: "flex", gap: 8 }}>
          {user.name}
          <button onClick={() => onDeleteUser(user.id)}>Delete user</button>
          <button onClick={() => handleUpdateUser(user)}>Update user</button>
        </div>
      ))}
    </div>
  );
}
