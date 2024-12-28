export function addAriaAttributes(element: HTMLElement, attributes: Record<string, string>) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(`aria-${key}`, attributes[key]);
    });
  }
