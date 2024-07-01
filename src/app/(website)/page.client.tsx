"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

// Add more shadcn/ui components with the command: `npx shadcn-ui@latest add`
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

// Momentjs
import moment from "moment";
import LogoNext from "@/components/LogoNext";
import { useStepperProvider } from "@/lib/hooks";
import SeleccionPelicula from "@/components/seleccion-pelicula";
import SeleccionPrecios from "@/components/seleccion-precio";
import SeleccionEntrada from "@/components/seleccion-entrada";
import Resumen from "@/components/resumen";

const AppComponent = () => {
  const { setTheme, theme } = useTheme();
  const { step, handleNextValue, handlePrevValue } = useStepperProvider();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SeleccionPelicula />;
      case 2:
        return <SeleccionPrecios />;
      case 3:
        return <SeleccionEntrada />;
      case 4:
        return <Resumen />;
      default:
        return null;
    }
  };

  return (
    <main className="w-full h-screen overflow-hidden">
      <header className="w-full h-auto fixed top-0 left-0 border-b overflow-hidden">
        <nav className="w-full h-full container mx-auto flex items-center justify-between px-5 py-3">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg"
          >
            <LogoNext />
          </Link>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <span className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </span>
                  <span className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>

      <div className="m-auto max-w-[1050px] px-4 min-h-screen mx-auto flex items-center justify-center flex-col gap-1 lg:gap-5">
        <div className="w-full h-[600px] p-10 flex flex-col items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md border">
          <span className="flex justify-between p-5 mb-5 w-full">
            <Button onClick={handlePrevValue} disabled={step <= 1}>
              &lt;---
            </Button>
            <Button onClick={handleNextValue} disabled={step >= 4}>
              ---&gt;
            </Button>
          </span>
          {renderStep()}
        </div>
      </div>

      <footer className="w-full h-auto fixed bottom-0 left-0 border-b overflow-hidden">
        <div className="w-full h-full container mx-auto flex items-center justify-center px-5 py-3 text-gray-500 text-pretty text-center text-sm">
          <span>
            © {moment().format("YYYY")} Entraduki.net,{" "}
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200 transition-all"
            >
              @nicolascailletbois
            </Link>
          </span>
        </div>
      </footer>
    </main>
  );
};

export default AppComponent;
