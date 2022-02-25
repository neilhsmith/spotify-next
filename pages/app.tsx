import type { NextPage, GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react";

interface Props {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const App: NextPage<Props> = ({ user }) => {
  return (
    <div>
      Signed in as {user.email}
      <br />
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
    </div>
  );
};

export default App;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  // todo: how do i handle not finding a session here?
  if (!session) return { props: {} };

  return {
    props: {
      user: session.user,
    },
  };
};
