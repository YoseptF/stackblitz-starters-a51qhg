/**
 * I separated the config here so that we have a place to change a few lines and
 * add  new items to the navbar
 * It could also come in handy if in the future users need different things in their nav
 * based on their user auth level for example
 */

export interface NavbarOption {
  name: string;
  path: string;
}

export const NAVBAR_OPTIONS: NavbarOption[] = [
  {
    name: "Featured",
    path: "/",
  },
  {
    name: "KPI",
    path: "/assets/kpi",
  },
  {
    name: "Layouts",
    path: "/assets/layouts",

  },
  {
    name: "Storyboards",
    path: "/assets/storyboards",
  },
];