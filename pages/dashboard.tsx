import { signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { clearSession } from "../utils/store/sessionSlice";

const Dashboard = () => {
  const { data: session } = useSession();
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearSession());
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl">Welcome, {session?.user?.name}</h2>
        <p>Email: {session?.user?.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

import { getSession } from "next-auth/react";

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
