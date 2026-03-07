import { HeroContainer } from "@/ui/resources/components/HeroContainer";
import type { FC } from "react";
import { Link } from "react-router";

export const HomePage: FC = () => {
  return (
    <div>
      <HeroContainer>
        <h1 className="text-5xl">Rodrigo Díaz de León C.</h1>
        <h2 className="text-4xl text-cian mt-3">Desarrollo Web</h2>
        <p className="py-6 text-xl text-desc font-medium">Desarrollador Full Stack con experiencia creando soluciones completas y productos de calidad</p>

        <div className="hero-btn-container flex justify-center gap-7 flex-wrap">
          <Link to="/">
            <button className="px-7 py-3 cursor-pointer border-0 bg-cian-gradient text-black rounded-lg font-medium transition duration-250 hover:scale-105">
              Ver Proyectos
            </button>
          </Link>
          <Link to="/">
            <button className="px-7 py-3 cursor-pointer border-0 bg-default rounded-lg font-medium transition duration-250 hover:scale-105">
              Contacto
            </button>
          </Link>
        </div>
      </HeroContainer>
    </div>
  );
};