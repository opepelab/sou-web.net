import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import theme from "libs/theme";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import Chakra from "components/Sys/chakra";
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

export async function middleware({ req }: NextApiResponse) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary      {/* <Chakra cookies={pageProps.cookies}> */}
      cookies: req.headers.cookie ?? "",
    },
  };
}

export default Chakra;
