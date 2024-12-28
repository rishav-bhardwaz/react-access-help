import { renderHook } from "@testing-library/react-hooks";
import { useAccessibleFocus } from "../src/hooks/useAccessibleFocus";
import { useRef } from "react";

test("focuses element when condition is true", () => {
  const ref = { current: document.createElement("div") };
  renderHook(() => useAccessibleFocus(ref, true));
  expect(document.activeElement).toBe(ref.current);
});
