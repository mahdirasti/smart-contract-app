import { lightPalette } from "../palettes";

/**
 * Since creating all font-faces takes lots of code lines, i placed them here for code organization.
 */
const CssBaselineOverrides = {
  styleOverrides: `
    body {
      direction: ltr;
      background: linear-gradient(90.97deg, ${lightPalette.gradientPrimaryStart.main} 53%, ${lightPalette.gradientPrimaryEnd.main} 100%);
      color:${lightPalette.text.secondary} !important;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
    a {
      text-decoration: none;
    }
  `,
};

export default CssBaselineOverrides;
