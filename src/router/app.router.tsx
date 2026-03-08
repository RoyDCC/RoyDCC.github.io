import { createBrowserRouter, Outlet } from "react-router";
import { HomePage } from "@/ui/home/pages/HomePage";
import { ContactPage } from "@/ui/contact/pages/ContactPage";
import { ResourcesPage } from "@/ui/resources/pages/ResourcesPage";
import { Navbar } from "@/ui/shared/components/Navbar";
import { Footer } from "@/ui/shared/components/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      }, 
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
    ],
  },
]);