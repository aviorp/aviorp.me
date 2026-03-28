export default defineAppConfig({
  global: {
    picture: {
      dark: "/avior.jpg",
      light: "/avior.jpg",
      alt: "My profile picture",
    },
    meetingLink: "https://wa.link/7nf5rm",
    email: "avior767@gmail.com",
    available: true,
  },
  ui: {
    colors: {
      primary: "rose",
      neutral: "neutral",
    },
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
        description:
          "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
      },
    },
  },
  footer: {
    credits: `Built with Passion • © 2025`,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-linkedin",
        to: "https://www.linkedin.com/in/avior/",
        target: "_blank",
        "aria-label": "Avior on LinkedIn",
      },
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/aviorp",
        target: "_blank",
        "aria-label": "Avior on GitHub",
      },
    ],
  },
});
