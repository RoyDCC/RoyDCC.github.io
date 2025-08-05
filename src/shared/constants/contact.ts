export interface ContactCardProps {
    title: string,
    description: string,
    icon: string,
    link: string
}

export const contactOptions: ContactCardProps[] = [
    {
        title: "Github",
        description: "Mi perfil de programador",
        link: "#",
        icon: "/icons/github.svg"
    },
    {
        title: "Linkedin",
        description: "Para mantenernos en contacto profesionalmente",
        link: "#",
        icon: "/icons/linkedin.svg"
    },
    {
        title: "E-Mail",
        description: "Para cualquier consulta o propuesta de trabajo",
        link: "#",
        icon: "/icons/email.svg"
    }
]