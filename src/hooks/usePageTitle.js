import { useEffect } from "react";

const APP_NAME = "Lite-Sigma";

export default function usePageTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle ? `${APP_NAME} | ${pageTitle}` : APP_NAME;
  }, [pageTitle]);
}
