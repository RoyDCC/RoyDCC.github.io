import { type FC } from "react";
import searchSVG from "/icons/search.svg";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ placeholder, onSearch }: SearchInputProps) => {
  return (
    <>
      <img
        src={searchSVG}
        alt="Search"
        className="w-7 h-7 object-contain absolute top-0 bottom-0 left-2 m-auto z-1 opacity-65 pointer-events-none"
      />
      <input
        type="search"
        className="search-bar glass-border-full px-4 py-2 pl-11 w-full rounded-lg bg-soft-blue"
        placeholder={placeholder || "Buscar..."}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
};
