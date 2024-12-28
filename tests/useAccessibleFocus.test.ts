import React, { useRef } from "react";
import { render, screen } from "@testing-library/react";
import { useAccessibleFocus } from "../src/hooks/useAccessibleFocus";

const TestComponent = ({ condition }: { condition: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useAccessibleFocus(ref, condition);

  return <div ref={ref} data-testid="focusable">Focusable Element</div>;
};

test("focuses element when condition is true", () => {
  render(<TestComponent condition={true} />);
  const focusableElement = screen.getByTestId("focusable");
  expect(document.activeElement).toBe(focusableElement);
});

test("does not focus element when condition is false", () => {
  render(<TestComponent condition={false} />);
  const focusableElement = screen.getByTestId("focusable");
  expect(document.activeElement).not.toBe(focusableElement);
});
