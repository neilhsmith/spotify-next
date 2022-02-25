import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button, Box, Center, Container } from "@chakra-ui/react";

export const LoginForm = () => {
  return (
    <Container maxW="container.sm">
      <Box paddingX={[4, 14, 24]} marginBottom="">
        <Image
          src="/logo.svg"
          alt="spotify-next logo"
          layout="responsive"
          width={608}
          height={238}
          priority
        />
      </Box>
      <Box bgColor="blackAlpha.500" px={[4, 16, 28]} py={[16, 20, null]}>
        <Center>
          <Button
            size="lg"
            w="100%"
            bgColor="primary"
            color="ButtonText"
            border="2px"
            borderColor="primary"
            borderRadius="0"
            _hover={{ bgColor: "transparent", color: "ButtonHighlight" }}
            onClick={() => signIn("spotify", { callbackUrl: "/app" })}
          >
            Sign In with Spotify
          </Button>
        </Center>
      </Box>
    </Container>
  );
};
