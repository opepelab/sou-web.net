import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import theme from "libs/theme";
import { NextApiResponse } from "next";
// import Chakra from "components/Sys/chakra";
type Storage = {
  cookies?: string;
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

export function getServerSideProps({ req }: NextApiResponse) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

export default Chakra;
