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