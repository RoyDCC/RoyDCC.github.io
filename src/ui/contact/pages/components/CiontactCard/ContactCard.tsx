import type { FC } from "react";

interface ContactCardProps {
  title: string;
  icon: string;
  link: string;
  description: string;
}

export const ContactCard: FC<ContactCardProps> = (props: ContactCardProps) => {
  const { icon, link, description, title } = props;

  return (
    <article
      className="contact-card bg-soft-blue glass-border-full
      flex flex-col flex-1 -grow justify-start rounded-xl 
      w-1/3 gap-3 px-3 py-7 min-w-58.75 sm:max-w-82.5
      transition duration-300"
    >
      <img src={icon} alt="Icon" className="contact-card-img mx-auto w-17 h-17 opacity-85 transition duration-300" />
      <h1 className="text-white text-xl font-bold">{title}</h1>
      <p className="text-desc">{description}</p>
      <a href={link} className="text-cian opacity-85" target="_blank">
        Contactar
      </a>
    </article>
  );
};
