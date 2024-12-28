import axe from "axe-core";

export async function checkAccessibility(rootElement: HTMLElement): Promise<axe.AxeResults> {
  const results = await axe.run(rootElement);
  return results;
}
