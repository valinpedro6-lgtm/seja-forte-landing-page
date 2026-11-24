import { describe, expect, it } from "vitest";

import { OFFER } from "@/lib/offer";

describe("template offer", () => {
  it("uses neutral placeholder identity", () => {
    expect(OFFER.creator).toBe("@000000");
    expect(OFFER.price).toBe("");
  });

  it("does not point to the previous checkout", () => {
    expect(OFFER.checkoutUrl).toBe("#contato");
  });
});
