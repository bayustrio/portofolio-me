import React, { useRef, useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { GET_THEME, HANDLE_THEME } from "../Context/Types/TypeThemeAct";
import NextLink from "next/link";
import Link from "next/link";
const Navs = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const [navFLoat, setNavFloat] = React.useState<boolean>(false);
  const { theme } = state;

  const refCDImg = useRef<HTMLButtonElement>(null);

  const navBars = useRef<HTMLDivElement | boolean>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 2) {
      setNavFloat(true);
    } else {
      setNavFloat(false);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  //   useEffect(() => {
  //     if (typeof window === "undefined") {
  //       dispatch({
  //         type: "GET_THEME",
  //         payload: theme,
  //       });
  //     }
  //   }, [state.theme]);

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       localStorage.setItem("theme", theme);
  //     }
  //   }, []);

  const handleTheme = () => {
    dispatch({
      type: "HANDLE_THEME",
      payload: theme,
    });
    if (theme === "light") {
      document.body.classList.add("dark");
      //   if(window.)
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "dark");
      }
    } else {
      document.body.classList.remove("dark");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "light");
      }
    }
  };
  return (
    <>
      <div
        // ref={navBars}
        className={
          navFLoat
            ? `fixed z-10 top-[3] ease-in duration-500 shadow  w-full h-[60px] dark:bg-[#20202380] items-center justify-between px-32 bg-[#ffffff40] backdrop-blur-md flex`
            : `fixed z-10 top-[3] ease-in duration-500  w-full h-[60px] dark:bg-bgDark items-center justify-between px-32 bg-yellowLight backdrop-blur-md flex`
        }
      >
        <h1 className="text-red-500 z-10">Nav</h1>

        <div className="flex items-center gap-3">
          <Link href="/">
            <p className="dark:text-white cursor-pointer">Home</p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer dark:text-white">About</p>
          </Link>
          <button onClick={handleTheme}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 font-normal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navs;
