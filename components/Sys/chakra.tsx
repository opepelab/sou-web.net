import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import theme from "libs/theme";
import { GetServerSidePropsContext } from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
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

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>;

export function getServerSideProps({ req }: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

export default Chakra;
