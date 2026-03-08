import type { FC } from "react";

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="glass-border-t text-desc bg-default">
    <div className="footer-wrapper max-w-7xl m-auto flex flex-col md:flex-row justify-between items-center gap-8 p-8">
      <div className="links-container flex flex-row gap-5 justify-center items-center">
        <a href="https://github.com/RoyDCC" target="_blank" className="inline-block w-10 h-10">
          <img src="/icons/github.svg" alt="Github Link" className="opacity-65"/>
        </a>
        <a href="#" className="inline-block w-10 h-10">
          <img src="/icons/linkedin.svg" alt="Linkedin Link" className="opacity-65"/>
        </a>
      </div>

      <p>
        &copy;{year} Rodrigo Díaz de León C. Todos los derechos reservados.
      </p>
    </div>
  </footer>
    </>
  );
};
