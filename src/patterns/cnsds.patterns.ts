import { Cnds } from "../models/cnds";

export const CNDS_PATTERNS = [
  {
    type: "FEDERAL",
    title: "CND Federal",
    order: 1,
    search: [["FEDERAIS E A DIVIDA ATIVA DA UNIAO"], ["CND FEDERAL"]],
    validRegex: /valida ate\s*(\d{2}\/\d{2}\/\d{4})/i,
  },
];
