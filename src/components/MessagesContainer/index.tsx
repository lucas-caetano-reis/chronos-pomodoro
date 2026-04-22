import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

type MessagesContainerProps = {
  children: React.ReactNode;
};

type AvailableThemes = "dark" | "light";

export function MessagesContainer({ children }: MessagesContainerProps) {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    if (typeof document === "undefined") return "light";

    return document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const htmlElement = document.documentElement;

    const syncTheme = () => {
      setTheme(
        htmlElement.getAttribute("data-theme") === "light" ? "dark" : "light",
      );
    };

    const observer = new MutationObserver(syncTheme);

    syncTheme();
    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {children}

      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
    </>
  );
}
