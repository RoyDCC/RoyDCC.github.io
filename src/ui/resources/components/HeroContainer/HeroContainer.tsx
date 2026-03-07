import type { FC, ReactNode } from "react";
import "./HeroContainer.css";

interface HeroContainerProps {
  children?: ReactNode;
}

export const HeroContainer: FC<HeroContainerProps> = ({ children }) => {
  return (
    <div className="hero-container flex justify-center items-center flex-col">
      {children && (
        <div className="hero-children z-1 flex flex-col gap-4 justify-center items-center text-center max-w-xl">{children}</div>
      )}
    </div>
  );
};