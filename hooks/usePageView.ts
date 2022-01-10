import { GA_TRACKING_ID, pageview } from "../libs/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function usePageView() {
  const router = useRouter();
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}
