import type {} from "@mui/lab/themeAugmentation"

import { Theme, alpha, createTheme } from "@mui/material"

import CssBaselineOverrides from "./CssBaselineOverrides"
import { lightPalette } from "../palettes"
import typographyVariantsGenerator from "./typographyVariantsGenerator"

/**
 * Place all theme related properties here (except for palette)
 * @param {boolean} dark is used to switch theme
 * Since designs currently have only one theme, don't provide dark argument
 */

const create = (dark?: boolean): Theme => {
  const palette = lightPalette

  const primaryColor = lightPalette.primary as any
  const secondaryColor = lightPalette.secondary as any

  const theme = createTheme({
    palette: lightPalette,
    direction: "ltr",
    typography: {
      fontFamily: "Epilogue"
    },
    components: {
      /* CssBaseline overrides (mostly because of typography) */
      MuiCssBaseline: CssBaselineOverrides,
      MuiFab: {
        styleOverrides: {
          root: {
            boxShadow: "none"
          }
        }
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            "&.Mui-disabled": {
              backgroundColor: `${alpha(primaryColor.light, 0.13)} !important`,
              color: `${alpha(primaryColor.main, 0.4)} !important`
            },
            "&:hover": {
              backgroundColor: primaryColor.main
            },
            "&.MuiLoadingButton-loading	": {
              backgroundColor: primaryColor.main
            },
            "& .MuiLoadingButton-loadingIndicator ": {
              color: primaryColor.main
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "none",
            backgroundColor: secondaryColor.dark,
            [`&.MuiPopover-paper`]: {
              marginTop: 30,
              paddingRight: 8,
              paddingLeft: 8,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)"
            }
          }
        }
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            "& .MuiFormControlLabel-label": {
              color: lightPalette.text.secondary,
              fontSize: "14px"
            },
            margin: 0
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            margin: "5px 10px",
            width: 16,
            height: 16,
            backgroundColor:
              lightPalette.mode === "dark" ? "#394b59" : "#f5f8fa",
            "&:hover": {
              backgroundColor:
                lightPalette.mode === "dark" ? "#394b59" : "#f5f8fa"
            }
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: "8px !important"
          }
        }
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            borderRadius: "8px"
          }
        }
      },
      MuiSwitch: {
        defaultProps: {
          disableFocusRipple: true,
          disableRipple: true,
          disableTouchRipple: true
        },
        styleOverrides: {
          root: {
            padding: 2,
            overflow: "initial",
            width: 40,
            height: 25,
            [`& .MuiSwitch-track`]: {
              borderRadius: 20
            },
            [`& .MuiSwitch-switchBase`]: {
              padding: 0,
              top: 2.5,
              boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)"
            }
          }
        }
      },
      MuiTextField: {
        variants: [
          {
            props: { variant: "filled" },
            style: {
              "& .MuiFilledInput-root": {
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: lightPalette.divider
                },
                backgroundColor: lightPalette.divider,
                color: lightPalette.text.secondary,
                "& input": {
                  padding: "18px 10px"
                },
                "&.Mui-focused": {
                  backgroundColor: lightPalette.divider
                }
              }
            }
          },
          {
            props: { variant: "outlined" },
            style: {
              "&:hover fieldset": {
                borderColor: "transparent"
              },
              "& label": {
                color: secondaryColor.main
              },
              "& .MuiOutlinedInput-root": {
                "& .MuiInputAdornment-root p": {
                  color: primaryColor.main
                },
                backgroundColor: "transparent !important",
                color: lightPalette.text.secondary,
                "&:hover": {
                  borderColor: "transparent"
                },
                "&.Mui-focused": {
                  borderColor: "transparent",
                  outline: "none"
                },
                border: "1px solid",
                borderColor: secondaryColor.main
              }
            }
          }
        ],
        defaultProps: {
          fullWidth: true
        }
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            [`.MuiFormLabel-filled + .MuiOutlinedInput-root fieldset`]: {
              borderColor: `#c5c5c5 !important`
            },
            [`.MuiFormLabel-filled + .MuiOutlinedInput-root`]: {
              backgroundColor: `#ffffff`
            }
          }
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: 14,
            marginLeft: 0,
            marginRight: 0,
            fontSize: 14,
            lineHeight: "19px",
            color: "rgba(0,0,0,0.6)"
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            [`& fieldset`]: {
              borderColor: "transparent"
            },
            [`&:hover fieldset`]: {
              borderColor: "#c5c5c5 !important"
            }
          }
        }
      },
      MuiFormGroup: {
        styleOverrides: {
          root: {
            [`& .MuiSwitch-root`]: {
              marginRight: 8
            }
          }
        }
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            [`&::after,&::before`]: {
              display: "none"
            }
          }
        }
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            borderRadius: "8px",
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            fontSize: 12,
            minWidth: 150,
            "&:hover": {
              backgroundColor: primaryColor.main
            },
            [`&.MuiButton-text`]: {
              boxShadow: "none !important"
            },
            "&.MuiButton-outlined": {
              color: "#8F8DE0",
              borderColor: "#8F8DE0"
            }
          }
        },
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              "&:hover": {
                backgroundColor: "transparent"
              }
            }
          },
          {
            props: { variant: "text" },
            style: {
              "&:hover": {
                backgroundColor: "transparent"
              }
            }
          }
        ]
      },
      MuiBadge: {
        styleOverrides: {
          dot: {
            backgroundColor: palette.extended_colors.green.main
          }
        }
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            background: `linear-gradient(180deg, ${alpha(
              lightPalette.gradientPrimaryStart.main,
              0.65
            )} 20%, ${lightPalette.gradientPrimaryEnd.main} 70%)`
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: primaryColor.main
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            margin: "16px 0",
            width: "auto",
            "& .MuiTabs-scroller": {
              "& span": {
                display: "none"
              },
              "& .MuiTabs-flexContainer": {
                justifyContent: "center",
                "& .MuiTab-root": {
                  minWidth: 120,
                  "@media(min-width:1100px)": {
                    minWidth: 150
                  },
                  textTransform: "capitalize"
                },

                "& .Mui-selected": {
                  border: "1px solid",
                  borderRadius: "8px"
                }
              }
            }
          }
        }
      }
    }
  })

  const media = theme.breakpoints.down("md")

  /* Responsive typographies here (only base typographies(for example header. not headerBold)) or default MUI */
  theme.typography.header = {
    fontSize: "52px",
    lineHeight: "63px",
    [media]: {
      fontSize: "40px",
      lineHeight: "45px"
    }
  }

  theme.typography.large = {
    fontSize: "48px",
    lineHeight: "58px",
    [media]: {
      fontSize: "22px",
      lineHeight: "28px"
    }
  }
  theme.typography.heading = {
    fontSize: "32px",
    lineHeight: "39px",
    [media]: {
      fontSize: "24px",
      lineHeight: "29px"
    }
  }
  theme.typography.subtitle = {
    fontSize: "22px",
    lineHeight: "30px",
    [media]: {
      fontSize: "20px",
      lineHeight: "25px"
    }
  }
  theme.typography.body = {
    fontSize: "18px",
    lineHeight: "26px",
    [media]: {
      fontSize: "16px",
      lineHeight: "22px"
    }
  }
  theme.typography.small = {
    fontSize: "16px",
    lineHeight: "22px",
    [media]: {
      fontSize: "14px",
      lineHeight: "18px"
    }
  }
  theme.typography.xsmall = {
    fontSize: "12px",
    lineHeight: "22px",
    [media]: {
      fontSize: "12px",
      lineHeight: "18px"
    }
  }
  theme.typography = {
    ...theme.typography,
    ...typographyVariantsGenerator(theme.typography)
  }

  return theme
}

export default create
