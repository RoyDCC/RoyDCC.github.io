import { createBrowserRouter } from "react-router";
import { HomePage } from "@/ui/home/pages/HomePage";
import { ContactPage } from "@/ui/contact/pages/ContactPage";
import { ResourcesPage } from "@/ui/resources/pages/ResourcesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />,
  },
]);