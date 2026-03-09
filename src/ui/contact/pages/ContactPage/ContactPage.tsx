import type { FC } from "react";
import { ContactCard } from "../components/CiontactCard";
import { contactOptions } from "@/domain/shared/constants/contact-options";

export const ContactPage: FC = () => {
  return (
    <section className="text-center container-lg px-4 py-10 mt-15">
      <div className="contact-text-container">
        <h1 className="text-5xl text-white font-bold">Contacto</h1>
        <p className="text-desc text-xl mt-3">
          ¿Tienes algún proyecto en mente o quieres colaborar?
          <br />
          ¡Me encantaría escuchar de ti!
        </p>
      </div>
      <div className="contact-cards-container flex flex-row flex-wrap justify-center gap-5 py-12">
        {contactOptions.map((opt) => (
          <ContactCard title={opt.title} description={opt.description} link={opt.link} icon={opt.icon} key={opt.title+opt.icon}/>
        ))}
      </div>
    </section>
  );
};
