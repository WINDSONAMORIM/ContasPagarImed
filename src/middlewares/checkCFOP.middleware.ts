import { CFOP, CFOPDatas } from "../data/CFOPData";

interface Prod {
  CFOP: string;
}

interface Det {
  prod: Prod;
}

type DetItem = Det | Det[];

export const checkCFOP = (det: DetItem): boolean => {
  const produtos = Array.isArray(det) ? det : [det];
  const data = CFOPDatas;

  const isRejected = produtos.some((c) => {
    return data.some(d=>{
        return d.codigo === c.prod.CFOP})
  });

  return isRejected;
};
