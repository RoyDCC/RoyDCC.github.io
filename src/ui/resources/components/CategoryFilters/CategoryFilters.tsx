import { useState, useEffect, type FC } from "react";

interface CategoryFiltersProps {
  filters: string[];
  onFilterSelected: (value: string) => void;
}

export const CategoryFilters: FC<CategoryFiltersProps> = ({ filters, onFilterSelected }: CategoryFiltersProps) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const selectFilter = (filter: string) => {
    setSelectedFilter((prev) => (prev === filter ? "" : filter));
  };

  useEffect(() => {
    onFilterSelected(selectedFilter);
  }, [selectedFilter, onFilterSelected]);

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {filters.map((filter) => (
        <button
          onClick={() => selectFilter(filter)}
          key={filter}
          className={`filter-chip glass-border-full rounded-4xl px-4 py-0.5 text-desc cursor-pointer capitalize 
            ${selectedFilter === filter ? "filter-chip-active" : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
