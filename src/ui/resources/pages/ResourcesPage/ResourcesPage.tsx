import { useState, useCallback, type FC } from "react";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard";
import { resources } from "@/domain/shared/constants/resources";
import { CategoryFilters } from "../../components/CategoryFilters";
import { categories } from "@/domain/shared/interfaces/resource.interface";
import { SearchInput } from "@/ui/shared/components/SearchInput";

export const ResourcesPage: FC = () => {
  const filterList = Object.values(categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const lowerSearch = searchTerm.toLowerCase();

  const filteredResources = resources.filter((rec) => {
    const categoryMatch = !selectedCategory || rec.category === selectedCategory;
    
    const searchMatch =
      !searchTerm ||
      rec.pageName.toLowerCase().includes(lowerSearch) ||
      rec.category.toLowerCase().includes(lowerSearch) ||
      rec.tags.some((tag) => tag.toLowerCase().includes(lowerSearch));

    return categoryMatch && searchMatch;
  });

  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategory(value);
  }, []);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

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
          <SearchInput placeholder="Buscar recursos..." onSearch={(value) => handleSearch(value)} />
        </div>

        <div className="filters-container container-xl mt-8">
          <CategoryFilters filters={filterList} onFilterSelected={handleCategoryChange} />
        </div>

        <div className="resources-list container-xl flex flex-wrap gap-6 justify-around py-15 pt-10">
          {filteredResources.map((resource) => (
            <ResourceCard resource={resource} key={resource.pageName + resource.category} />
          ))}
        </div>
      </article>
    </section>
  );
};
