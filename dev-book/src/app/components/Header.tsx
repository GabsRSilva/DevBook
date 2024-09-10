import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export const Header: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="navbar fixed w-full z-[100] shadow-xl bg-black h-10 text-customBlue">
      <div className="navbar-end">
        <ul className=" hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Inicio</li>
          </Link>

          <Link href="/livros">
            <li className="ml-10 text-sm uppercase hover:border-b">Livros</li>
          </Link>
        </ul>
        <div
          onClick={handleNav}
          className="md:hidden bg-blue-500 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between w-full items-center">
            <Image src="" alt="Logo" width="80" height="35" />

            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              criando o melhor projeto para você
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="text-sm uppercase hover:border-b py-4">Home</li>
              </Link>

              <Link href="/projetos">
                <li className="text-sm uppercase hover:border-b py-4">
                  Projetos
                </li>
              </Link>

              <Link href="/sobre">
                <li className="text-sm uppercase hover:border-b py-4">Sobre</li>
              </Link>

              <Link href="/contato">
                <li className="text-sm uppercase hover:border-b py-4">
                  Contatos
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
