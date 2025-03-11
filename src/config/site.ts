export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Polls App",
  description: "A simple polls app",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Polls",
      href: "/polls",
    }
  ],
};
