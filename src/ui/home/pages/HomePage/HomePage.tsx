import type { FC } from "react";
import { Link } from "react-router";
import { technologies } from "@/domain/shared/constants/technology-stack";
import { HeroContainer } from "@/ui/home/components/HeroContainer";
import { TechStack } from "../../components/TechStack";
import { ContactCTA } from "@/ui/shared/components/ContactCTA";

export const HomePage: FC = () => {
  return (
    <>
      <HeroContainer>
        <h1 className="text-5xl">Rodrigo Díaz de León C.</h1>
        <h2 className="text-4xl text-cian mt-3">Desarrollo Web</h2>
        <p className="py-6 text-xl text-desc font-medium">
          Desarrollador Full Stack con experiencia creando soluciones completas y productos de calidad
        </p>

        <div className="hero-btn-container flex justify-center gap-7 flex-wrap">
          <Link
            to="/"
            className="px-7 py-3 cursor-pointer border-0 bg-cian-gradient text-black rounded-lg font-medium transition duration-250 hover:scale-105"
          >
            Ver Proyectos
          </Link>
          <Link
            to="/"
            className="px-7 py-3 cursor-pointer border-0 bg-default rounded-lg font-medium transition duration-250 hover:scale-105"
          >
            Contacto
          </Link>
        </div>
      </HeroContainer>

      <div className="techstack-container mt-8 py-10 px-4">
        <TechStack technologyList={technologies} />
      </div>

      <div className="cta-container mb-15 py-12 px-4 drop-light">
        <ContactCTA />
      </div>
    </>
  );
};