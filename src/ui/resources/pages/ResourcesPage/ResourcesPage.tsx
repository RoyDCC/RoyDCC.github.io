import { useState, useCallback, type FC } from "react";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard";
import { resources } from "@/domain/shared/constants/resources";
import { CategoryFilters } from "../../components/CategoryFilters";
import { categories } from "@/domain/shared/interfaces/resource.interface";
import searchSVG from "/icons/search.svg";

export const ResourcesPage: FC = () => {
  const filterList = Object.values(categories);
  const [filteredResources, setFilteredResources] = useState(resources)

  const hanldleFilterChange = useCallback((value: string) => {
    if (!value) {
      setFilteredResources(resources);
      return;
    }

    setFilteredResources(resources.filter((rec) => rec.category === value));
  }, []);

  return (
    <section className="px-4 py-10 mt-15">
      <div className="resources-desc-container">
        <h1 className="text-5xl font-bold text-center">Recursos para Desarrolladores</h1>
        <p className="text-xl text-desc mt-4 text-center">
          Una colección de herramientas, bibliotecas y recursos útiles para desarrolladores
        </p>
      </div>

      <article className="resources-container mt-12">
        <div className="search-wrapper max-w-md m-auto relative">
          <img
            src={searchSVG}
            alt="Search"
            className="w-7 h-7 object-contain absolute top-0 bottom-0 left-2 m-auto z-1 opacity-65 pointer-events-none"
          />
          <input
            type="search"
            className="search-bar glass-border-full px-4 py-2 pl-11 w-full rounded-lg bg-soft-blue"
            placeholder="Buscar..."
          />
        </div>

        <div className="filters-container container-xl mt-8">
          <CategoryFilters filters={filterList} onFilterSelected={hanldleFilterChange} />
        </div>

        <div className="resources-list container-xl flex flex-wrap gap-6 justify-around py-15 pt-10">
          {filteredResources.map(resource=>(
            <ResourceCard resource={resource} key={resource.pageName+resource.category} />
          ))}
        </div>
      </article>
    </section>
  );
};
