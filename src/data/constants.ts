export const sidebarLinks: SidebarLinkType[] = [
  {
    heading: "CUSTOMERS",
    links: [
      {
        label: "Users",
        href: "/",
        icon: "/assets/svg/icons/user-friends 1.svg",
      },
      {
        label: "Guarantors",
        href: "#",
        icon: "/assets/svg/icons/users 1.svg",
      },
      {
        label: "Loans",
        href: "#",
        icon: "/assets/svg/icons/sack 1.svg",
      },
      {
        label: "Decision Models",
        href: "#",
        icon: "/assets/svg/icons/handshake-regular 1.svg",
      },
      {
        label: "Savings",
        href: "#",
        icon: "/assets/svg/icons/piggy-bank 1.svg",
      },
      {
        label: "Loan Requests",
        href: "#",
        icon: "/assets/svg/icons/hand money.svg",
      },
      {
        label: "Whitelist",
        href: "#",
        icon: "/assets/svg/icons/user-check 1.svg",
      },
      {
        label: "Karma",
        href: "#",
        icon: "/assets/svg/icons/user-times 1.svg",
      },
    ],
  },
  {
    heading: "BUSINESSES",
    links: [
      {
        label: "Organization",
        href: "#",
        icon: "/assets/svg/icons/briefcase 1.svg",
      },
      {
        label: "Loan Products",
        href: "#",
        icon: "/assets/svg/icons/hand money.svg",
      },
      {
        label: "Savings Products",
        href: "#",
        icon: "/assets/svg/icons/np_bank_148501_000000 1.svg",
      },
      {
        label: "Fees and Charges",
        href: "#",
        icon: "/assets/svg/icons/transaction.svg",
      },
      {
        label: "Services",
        href: "#",
        icon: "/assets/svg/icons/galaxy 1.svg",
      },
      {
        label: "Service Account",
        href: "#",
        icon: "/assets/svg/icons/user-cog 1.svg",
      },
      {
        label: "Settlements",
        href: "#",
        icon: "/assets/svg/icons/scroll 1.svg",
      },
      {
        label: "Reports",
        href: "#",
        icon: "/assets/svg/icons/chart-bar 2.svg",
      },
    ],
  },
  {
    heading: "SETTINGS",
    links: [
      {
        label: "Preferences",
        href: "#",
        icon: "/assets/svg/icons/sliders-h 1.svg",
      },
      {
        label: "Fees and pricing",
        href: "#",
        icon: "/assets/svg/icons/badge-percent 1.svg",
      },
      {
        label: "Audit Logs",
        href: "#",
        icon: "/assets/svg/icons/audit.svg",
      },
      {
        label: "Systems Messages",
        href: "#",
        icon: "/assets/svg/icons/tire 1.svg",
      },
    ],
  },
];

export const tableHeader = [
  "Organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
  "",
];

export const tableData = [
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
];

interface StatItem {
  color: string;
  iconSrc: string;
  label: string;
  value: number;
  altText: string;
}

export const statsData: StatItem[] = [
  {
    color: "#DF18FF",
    iconSrc: "/assets/svg/icons/users.svg",
    label: "Users",
    value: 2453,
    altText: "users",
  },
  {
    color: "#5718FF",
    iconSrc: "/assets/svg/icons/Group user.svg",
    label: "Active Users",
    value: 2453,
    altText: "active users",
  },
  {
    color: "#F55F44",
    iconSrc: "/assets/svg/icons/Group data.svg",
    label: "Users with Loans",
    value: 12453,
    altText: "users with loans",
  },
  {
    color: "#FF3366",
    iconSrc: "/assets/svg/icons/Group coin.svg",
    label: "Users with Savings",
    value: 102453,
    altText: "users with savings",
  },
];
