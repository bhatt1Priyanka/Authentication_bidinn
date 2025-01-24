import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Login from "./login";

export default function Home() {
  return (
  <Login/>
  );
}

// Redirect to the dashboard if the user is already logged in
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
