import { describe, expect, it } from "vitest";

import { OFFER } from "@/lib/offer";

describe("SEJA FORTE offer", () => {
  it("costs R$ 27,90", () => {
    expect(OFFER.price).toBe("27,90");
  });

  it("sends buyers to the Lastlink checkout", () => {
    expect(OFFER.checkoutUrl).toBe("https://lastlink.com/p/C75F862B3/checkout-payment");
  });
});
