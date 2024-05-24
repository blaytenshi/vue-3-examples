import settingsConfig from "../config/settings.json";
import themeConfig from "../config/theme.json";

// entire combined theme object
let currentTheme;
let currentThemeName;

export const initialiseThemes = () => {
  currentThemeName = loadThemeName();
  currentTheme = loadMergedTheme(currentThemeName);
};

export const loadThemeName = () => {
  // try to retrieve the current theme from localStorage
  const storedThemeName = window.localStorage.getItem("storedThemeName");

  // currentThemeName is the one stored in localStorage if it is not null and can be found in themeConfig
  if (storedThemeName) {
    return storedThemeName;
  }

  // otherwise, find the initial theme name from settings
  const { initialTheme } = settingsConfig;

  if (initialTheme) {
    window.localStorage.setItem("currentTheme", initialTheme);
    return initialTheme;
  }

  throw new Error("Unable to initialise theme. Please provide value for initialTheme in settings configuration.");
};

//
export const loadMergedTheme = (theme) => {
  if (!themeConfig[theme]) {
    throw new Error(`Unable to find theme ${theme} in theme configuration.`);
  }

  if (!themeConfig.base) {
    throw new Error("Unable to load base theme. Please check theme configuration.");
  }

  return mergedThemes(themeConfig[theme], themeConfig.base);
};

// return base theme for now, later on we could probably use lodash merge for this.
export const mergedThemes = (theme, baseTheme) => baseTheme;

export const getTheme = () => {
  if (!currentTheme) {
    throw new Error("No theme has been set, has initialiseThemes() been called?");
  }

  return currentTheme;
};

export const getThemeName = () => {
  if (!currentThemeName) {
    throw new Error("No themeName has been set, has initialiseThemes() been called?");
  }

  return currentThemeName;
};
