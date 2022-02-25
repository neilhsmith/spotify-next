import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { Button, useColorMode } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={() => signIn("spotify", { callbackUrl: "/app" })}>
        Sign In with Spotify
      </Button>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
};

export default Home;
