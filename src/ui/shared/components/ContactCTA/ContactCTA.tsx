import type { FC } from "react";
import { Link } from "react-router";

export const ContactCTA: FC = () => {
  return (
    <>
      <section className="container-lg text-center glass-border-full rounded-2xl py-15 px-3 flex flex-col gap-5">
        <h1 className="text-3xl font-bold">¿Tienes un proyecto en mente?</h1>
        <p className="text-desc text-lg">Transformemos tus ideas en soluciones digitales</p>

        <Link to="/contact">
          <button className="px-7 py-3 cursor-pointer border-0 bg-cian-gradient text-black rounded-lg font-medium transition duration-250 hover:scale-103">
            Contacto
          </button>
        </Link>
      </section>
    </>
  );
};
