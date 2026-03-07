import type { FC } from "react";
import { type Technology } from "@/domain/shared/constants/technology-stack";
import { IconCard } from "@/ui/shared/components/IconCard";

interface TechStackProps {
  technologyList: Technology[];
}

export const TechStack: FC<TechStackProps> = ({ technologyList }: TechStackProps) => {
  const mainTechnologies = technologyList.filter((item) => item.active && item.main);
  const otherTechnologies = technologyList.filter((item) => item.active && !item.main);

  return (
    <section className="container-lg">
      <div className="main-tech">
        <h1 className="text-white text-3xl font-bold text-center mb-10">Herramientas Principales</h1>

        <div className="cards-container flex flex-wrap justify-center gap-5">
          {mainTechnologies.map((tech) => (
            <IconCard title={tech.name} icon={tech.icon} key={tech.name} />
          ))}
        </div>
      </div>

      <div className="other-tech mt-16 pt-10 glass-border-t">
        <h1 className="text-desc-regular text-2xl text-center mb-6">Otras tecnologías</h1>

        <div className="cards-container flex flex-wrap justify-center gap-5">
          {otherTechnologies.map((tech) => (
            <IconCard title={tech.name} icon={tech.icon} smallCard key={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
