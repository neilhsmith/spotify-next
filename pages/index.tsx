import type { NextPage } from "next";
import { Center } from "@chakra-ui/react";
import { LoginForm } from "components/loginForm";

const Home: NextPage = () => {
  return (
    <Center h="100%">
      <LoginForm />
    </Center>
  );
};

export default Home;
