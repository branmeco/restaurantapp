import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-2 lg:px-20 xl:px-20 h-[calc(100vh-2rem)] md:h-[calc(100vh-.5rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`hidden xl:block ${category.color === "white" // Comprueba si el fondo es blanco
                  ? "bg-white text-black" // Si es blanco, el botón tiene fondo negro y texto blanco
                  : "bg-black text-white" // Si no es blanco, el botón tiene fondo blanco y texto negro
                } py-2 px-4 rounded-md`}
            >
              Explore
            </button>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;