
import UserInfo from "../components/UserInfo/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      Hello from home
      <Login/>
      <h2>Sign Up</h2>
      <SignUp />
      <h2>User Data</h2>
      <UserInfo />
      <h2>Server component</h2>
      {JSON.stringify(session)}
    </div>
  );
}
