import React from "react";

import forwardPolymorphicRef from "../forward-polymorphic-ref";

describe("forwardPolymorphicRef", () => {
  it("should create forward ref component", () => {
    const TestComponent = forwardPolymorphicRef<"div", { customProp?: string }>((props, ref) => (
      <div ref={ref} {...props} />
    ));

    expect(TestComponent).toBeDefined();
    expect(TestComponent.$$typeof).toBeDefined();
  });
});
