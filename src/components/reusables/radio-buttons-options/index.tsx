import * as React from "react"

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  alpha
} from "@mui/material"

interface IRadioButtonsOptionsProps {
  id: string
  value: string
  items?: Option[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface Option {
  title: string
  value: string
  meta?: React.ReactNode
}

const RadioButtonsOptions: React.FunctionComponent<
  IRadioButtonsOptionsProps
> = ({ items = [], id, value, onChange }) => {
  return items.length ? (
    <RadioGroup
      aria-labelledby={`${id}-group-label`}
      value={value}
      name={id}
      onChange={onChange}
    >
      {items.map((item) => {
        const isSelected = item.value === value

        return (
          <Stack direction={"column"} key={item.value}>
            <FormControlLabel
              sx={{
                width: "100%",
                bgcolor: (t) =>
                  isSelected
                    ? alpha(t.palette.primary.main, 0.12)
                    : "transparent",
                borderRadius: 2,
                [`& .MuiFormControlLabel-label`]: {
                  color: (t) =>
                    isSelected ? t.palette.primary.main : t.palette.common.black
                }
              }}
              value={item.value}
              control={<Radio />}
              label={item.title}
            />
            {isSelected && item.meta}
          </Stack>
        )
      })}
    </RadioGroup>
  ) : null
}

export default RadioButtonsOptions
