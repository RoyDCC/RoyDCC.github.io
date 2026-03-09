import type { FC } from "react";
import type { Resource } from "@/domain/shared/interfaces/resource.interface";
import externalLink from "/icons/external-link.svg";
import "./ResourceCard.css";

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: FC<ResourceCardProps> = ({ resource }: ResourceCardProps) => {
  return (
    <div
      className="p-4 py-5 w-1/4 max-w-112.5 min-w-75
        glass-border-full rounded-xl bg-soft-blue 
        flex flex-col grow relative gap-3 justify-between"
    >
      <a href={resource.pageLink} target="_blank" className="external-link w-6 h-6 absolute">
        <img src={externalLink} alt="Visit" className="w-full" />
      </a>

      <h1 className="text-white text-xl font-semibold">{resource.pageName}</h1>
      <p className="text-desc">{resource.description}</p>
      <ul className="flex flex-wrap text-sm gap-2">
        {resource.tags.map((tag) => (
          <li
            className="bg-purple text-purple border-purple font-light rounded-full p-1 px-3 capitalize"
            key={tag + resource.pageName}
          >
            {tag}
          </li>
        ))}
      </ul>
      <p className="text-desc capitalize">{resource.category}</p>
    </div>
  );
};
