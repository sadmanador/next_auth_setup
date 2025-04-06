import Login from "@/components/Login/Login";
import UserInfo from "@/components/UserInfo/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      Hello from home
      <Login></Login>
      <h2>User Data</h2>
      <UserInfo />
      <h2>Server component</h2>
      {JSON.stringify(session)}
    </div>
  );
}
