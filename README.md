

# **Accessibility Helpers**

![npm]([https://img.shields.io/npm/v/react-access-helper])  
A lightweight library for improving accessibility in React applications. This package includes tools and hooks to simplify focus management, detect accessibility issues, and dynamically apply ARIA attributes.

---

## **Features**

- **Focus Management:**
  - `useAccessibleFocus`: Automatically sets focus on an element when a condition is met.
  
- **Accessibility Issue Detection:**
  - `checkAccessibility`: Scans the DOM for accessibility violations using `axe-core`.

- **Dynamic ARIA Attributes:**
  - `addAriaAttributes`: Dynamically adds ARIA attributes to elements for better screen reader support.

---

## **Installation**

Install the package via npm:

```bash
npm install react-access-helper
```

Or with Yarn:

```bash
yarn add react-access-helper
```

---

## **Usage**

### 1. **Focus Management with `useAccessibleFocus`**
Automatically manage focus for elements to enhance keyboard navigation.

```tsx
import React, { useRef } from "react";
import { useAccessibleFocus } from "react-access-helper";

const App = () => {
  const ref = useRef<HTMLButtonElement>(null);

  // Focus the button when the condition is true
  useAccessibleFocus(ref, true);

  return <button ref={ref}>Click Me</button>;
};

export default App;
```

---

### 2. **Detect Accessibility Issues with `checkAccessibility`**
Identify and debug accessibility issues during development.

```tsx
import React, { useEffect } from "react";
import { checkAccessibility } from "react-access-helper";

const App = () => {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      checkAccessibility(rootElement).then((results) => {
        console.log("Accessibility Issues:", results.violations);
      });
    }
  }, []);

  return <div id="root">Hello, World!</div>;
};

export default App;
```

---

### 3. **Add Dynamic ARIA Attributes**
Simplify adding ARIA attributes programmatically.

```tsx
import { addAriaAttributes } from "react-access-helper";

const element = document.getElementById("example");
if (element) {
  addAriaAttributes(element, {
    label: "Accessible Element",
    describedby: "description",
  });
}
```

---

## **API Reference**

### **`useAccessibleFocus`**
- **Description:** A React hook to manage focus on an element when a condition is met.
- **Arguments:**
  - `ref`: A `React.RefObject` of the target element.
  - `condition`: A boolean value indicating whether the element should receive focus.

### **`checkAccessibility`**
- **Description:** Detects accessibility violations in the DOM using `axe-core`.
- **Arguments:**
  - `rootElement`: The root DOM node to scan for issues.
- **Returns:** A Promise resolving to `axe.AxeResults`.

### **`addAriaAttributes`**
- **Description:** Adds ARIA attributes to an element dynamically.
- **Arguments:**
  - `element`: The target DOM element.
  - `attributes`: A key-value pair of ARIA attributes to apply.

---

## **Why Use This Package?**

1. **Simplifies Accessibility Efforts:**
   - Provides easy-to-use tools for common accessibility tasks.
   
2. **Improves User Experience:**
   - Ensures compliance with accessibility standards like WCAG.

3. **Boosts Development Efficiency:**
   - Reduces repetitive code for managing ARIA attributes and focus states.

4. **Seamless Integration:**
   - Works out-of-the-box with any React application.

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request with a detailed explanation.

---

## **License**

This package is licensed under the MIT License.

---

## **Contact**

For any questions or feedback, feel free to open an issue on [GitHub](https://github.com/rishav-bhardwaz/react-access-help).

---

Let me know if you’d like help with customization or further refinement!
