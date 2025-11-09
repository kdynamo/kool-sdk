
export const getTestMockCssVar =  (initialVars: Record<string, string> = {}) => {
    const cssVars: Record<string, string> = {...initialVars};
    // Mock window.getComputedStyle
    Object.defineProperty(window, 'getComputedStyle', {
    writable: true, // Allows the property to be reassigned
    value: jest.fn((element: HTMLElement, pseudoEl: string) => {
        // You can return a mock CSSStyleDeclaration object or call the original
        // based on your testing needs.

        // Example 1: Return a simple mock object
        return {
        getPropertyValue: jest.fn((prop) => cssVars[prop])
        // Add other methods or properties as needed
        };

        // Example 2: Call the original implementation if you want to use JSDOM's behavior
        // return originalGetComputedStyle(element, pseudoElt);
    }),
    });

  const mockSetProperty = jest.fn();
  const mockElement = {
    style: {
      setProperty: (cssVar: string, value: string) => {
        cssVars[cssVar] = value;
        mockSetProperty(cssVar, value);
      },
    },
    // Add other properties or methods the component might use on the element
  };

  return [mockElement, mockSetProperty];
}