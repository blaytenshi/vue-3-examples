// this is a script that is run that imports vee-validate's global validator rules and registers them globally
import { defineRule } from "vee-validate";
import { required, alpha, min, email } from "@vee-validate/rules";

export default function loadVeeValidateGlobalValidatorRules() {
  defineRule("required", (value) => {
    if (required(value)) {
      return true;
    }

    return "This field is required";
  });
  defineRule("alpha", alpha);
  defineRule("minLength", (value, length) => {
    if (min(value, length)) {
      return true;
    }

    return `This field must be at least ${length} characters long`;
  });
  defineRule("email", (value) => {
    if (email(value)) {
      return true;
    }

    return "Email address must be valid";
  });
}
