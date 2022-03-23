import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import theme from "libs/theme";
import { NextApiResponse } from "next";
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

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.redirect("/"); // creates an actual instance
  req.cookies ?? ""; // can be called on an instance
  return res;
}

export default Chakra;
