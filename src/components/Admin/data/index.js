// Dynamically import all JSON files in the current directory
const jsonModules = import.meta.glob('./*.json', { eager: true });

// Extract and combine the default exports from all matched modules
export const data = Object.values(jsonModules).map((module) => module.default);
