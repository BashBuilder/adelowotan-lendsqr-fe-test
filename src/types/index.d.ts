declare interface SidebarLinkType {
  heading: string;
  links: {
    label: string;
    href: string;
    icon: string;
  }[];
}

declare type UserData = {
  email: string;
  password: string;
};
