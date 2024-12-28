import { checkAccessibility } from "../src/utils/checkAccessibility";

test("returns accessibility issues", async () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = "<button>Click me</button>";
  const results = await checkAccessibility(rootElement);
  expect(results.violations.length).toBe(0);
});
