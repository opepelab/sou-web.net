import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import theme from "libs/theme";
import { GetServerSideProps } from "next";

type Storage = {
  cookies: string;
  children: React.ReactNode;
};

const Chakra = ({ cookies, children }: Storage) => {
  const colorModeManager = typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;

  return (
    <ChakraProvider resetCSS={false} theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
};

export default Chakra;
