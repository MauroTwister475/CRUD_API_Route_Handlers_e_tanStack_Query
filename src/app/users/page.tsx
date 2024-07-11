"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { UserList } from "@/user-list";
import { User } from "@/types/user";
import {
  createUserService,
  deleteUserService,
  updateUserService,
} from "@/services/user.service";

export default function UsersPage() {
  const [name, setName] = useState<string>("");
  // ========= CREATE ============================
  const createMutation = useMutation({
    mutationFn: createUserService,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  // ========= UPDATE ============================
  const updateStudent = (student: User) => {
    mutationUpdate.mutate(student);
  };

  const mutationUpdate = useMutation({
    mutationFn: updateUserService,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
  // ================ DELETE ============================
  const deleteStudent = (id: string) => {
    deleteMutation.mutate(id);
  };

  const deleteMutation = useMutation({
    mutationFn: deleteUserService,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  function handlerCreateUser() {
    createMutation.mutate(name);
    setName("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <div className="mt-4 bg-red-600">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handlerCreateUser}>add new user</button>
      </div>
      <UserList
        name={name}
        onSetName={setName}
        onDeleteUser={deleteStudent}
        onUpdateUser={updateStudent}
      />
    </div>
  );
}
