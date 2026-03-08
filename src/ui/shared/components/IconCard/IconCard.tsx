import type { FC } from "react";
import "./IconCard.css";

interface CardProps {
  title: string;
  icon: string;
  smallCard?: boolean;
}

export const IconCard: FC<CardProps> = (props: CardProps) => {
  const cardStyle = props.smallCard ? "w-25 w-27 py-3 px-2 sm:max-w-30": "w-1/5 min-w-30 bg-soft-blue py-5 px-4 md:py-6 md:px-10";
  const imgStyle = props.smallCard ? "w-7 h-7" : "max-w-15 max-h-15 w-11/12";
  const figcaptionStyle = props.smallCard ? "mt-2 text-sm" : "mt-5 text-base";

  return (
    <article
      className={`icon-card cursor-pointer transition duration-300 glass-border-full rounded-xl grow ${cardStyle}`}
    >
      <figure>
        <img
          src={props.icon}
          alt={props.title}
          className={`rounded-lg m-auto drop-light transition duration-300 ${imgStyle}`}
        />
        <figcaption className={`transition duration-300 text-desc text-center ${figcaptionStyle}`}>
          {props.title}
        </figcaption>
      </figure>
    </article>
  );
};
