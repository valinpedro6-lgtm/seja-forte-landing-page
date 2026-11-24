import { describe, expect, it } from "vitest";

import { OFFER } from "@/lib/offer";

describe("template identity", () => {
  it("uses neutral placeholder identity", () => {
    expect(OFFER.product).toBe("LANDING PAGE TESTE");
    expect(OFFER.creator).toBe("@000000");
  });
});
