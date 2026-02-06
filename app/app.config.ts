export default defineAppConfig({
  global: {
    picture: {
      dark: "https://media.licdn.com/dms/image/v2/D4D03AQGa06CAWheZOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695893405451?e=1772064000&v=beta&t=ry5_n3pr_gXe3SEZM7woEnZ-QscH_O8HWBrrgtpiPEw",
      light:
        "https://media.licdn.com/dms/image/v2/D4D03AQGa06CAWheZOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695893405451?e=1772064000&v=beta&t=ry5_n3pr_gXe3SEZM7woEnZ-QscH_O8HWBrrgtpiPEw",
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
