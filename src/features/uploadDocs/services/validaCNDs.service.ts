import { Cnds } from "../../../models/cnds";
import { CNDS_PATTERNS } from "../../../patterns/cnsds.patterns";

export class validateCnds {
  validate(cnd: string): Cnds[] {
    const result: Cnds[] = [];

    for (const pattern of CNDS_PATTERNS) {
      const isMatch = pattern.search.some((term) =>
        term.every((cndTerm) => cnd.includes(cndTerm)),
      );
      if (!isMatch) continue;

      let validated: Date | null = null;
      const match = cnd.match(pattern.validRegex);
      if (match && match[1]) {
        validated = new Date(match[1]);
      }

      result.push(
        new Cnds({
          type: pattern.type,
          validity: validated,
          title: pattern.title,
          status: "VALID",
        }),
      );
    }
    return result.sort(
      (a, b) =>
        CNDS_PATTERNS.find((p) => p.type === a.getProps().type)!.order -
        CNDS_PATTERNS.find((p) => p.type === b.getProps().type)!.order,
    );
  }
}
