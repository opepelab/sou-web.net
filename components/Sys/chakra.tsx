import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import emotionCache from "libs/emotion-cache";
import { CacheProvider } from "@emotion/react";
import theme from "libs/theme2";
import { NextApiResponse } from "next";

type Storage = {
  cookies?: string;
  children: React.ReactNode;
};

export const Chakra = ({ cookies, children }: Storage) => {
  const colorModeManager = typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider resetCSS={false} theme={theme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    </CacheProvider>
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
