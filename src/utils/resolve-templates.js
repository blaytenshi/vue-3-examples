import themeJson from "../config/theme.json" with { type: 'json' };

const resolveTemplates = (obj) => {
  if (typeof obj === "object" && obj !== null) {
    const entries = Object.entries(obj)
    entries.forEach(([ key, value ]) => {
      resolveTemplates(value)
    });
  }
  if (typeof obj === "string") {
    console.log(obj);
  }
};

resolveTemplates(themeJson);
