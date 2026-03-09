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
        link: "https://github.com/RoyDCC",
        icon: "/icons/github.svg"
    },
    {
        title: "Linkedin",
        description: "Para mantenernos en contacto profesionalmente",
        link: "https://www.linkedin.com/in/rodrigo-díaz-de-león-castañeda-a01614361",
        icon: "/icons/linkedin.svg"
    },
    {
        title: "E-Mail",
        description: "Para cualquier consulta o propuesta de trabajo",
        link: "mailto:rodrigo.diazdeleonca@gmail.com",
        icon: "/icons/email.svg"
    }
]