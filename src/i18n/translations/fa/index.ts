import common from "./common.json";
import inputValidations from "./input-validations.json";
import routes from "./routes.json";
import sections from "./sections.json";

/**
 * All different namespaces (each will be stored in a separate file) are loaded and exported from here
 * @example common,etc.
 */
const enResources = {
  common,
  inputValidations,
  sections,
  routes,
};

export default enResources;
