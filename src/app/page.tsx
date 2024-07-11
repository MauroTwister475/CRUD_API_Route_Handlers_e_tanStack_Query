import Link from "next/link";
import UsersPage from "./users/page";

export default function page() {
  return (
    <div>
      <Link href="/users">Ir pra pagina de usuarios</Link>
    </div>
  );
}
