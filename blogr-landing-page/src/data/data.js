import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    title: "Products",
    link: ["Overview", "Pricing", "Marketplace, Features, Intergrations"],
  },

  {
    id: uuidv4(),
    title: "Company",
    link: ["About", "Teams", "Blog", "Careers"],
  },

  {
    id: uuidv4(),
    title: "Connect",
    link: ["Contact", "Newsletter", "LinkedIn"],
  },
];
