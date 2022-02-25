import type { NextPage } from "next";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <button onClick={() => signIn("spotify", { callbackUrl: "/app" })}>
      Sign In with Spotify
    </button>
  );
};

export default Home;
