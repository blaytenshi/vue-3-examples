import themeJson from "../config/theme.json";

const designTokenString = Object
  .entries(themeJson.colours)
  .map(([ cssVariableName, cssVariableValue ]) => `--ds-${cssVariableName}: ${cssVariableValue};`)
  .join("");

const loadDesignTokens = () => {
  const style = document.createElement("style");

  style.id = "design-tokens";
  style.textContent = `
    :root {
      ${designTokenString}
    }
  `;
  document.head.appendChild(style);
};

export default loadDesignTokens;
