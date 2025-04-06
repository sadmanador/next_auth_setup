import Login from "@/components/Login/Login";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      Hello from home
      <Login></Login>
      <h1>User Info Client</h1>
      <UserInfo />
      <h1>User Info Server</h1>
      {JSON.stringify(session)}
    </div>
  );
}
