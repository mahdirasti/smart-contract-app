import * as React from "react"

import { MenuItem, Stack, TextField } from "@mui/material"

import { useTranslation } from "react-i18next"

interface IMyTimePickerProps {
  onChange?: (time: ITime) => void
  val?: ITime
  hasHour?: boolean
  hasMinute?: boolean
}

interface ITime {
  minute: number
  hour: number
}

const MyTimePicker: React.FunctionComponent<IMyTimePickerProps> = ({
  onChange,
  val,
  hasHour = true,
  hasMinute = true
}) => {
  const [date, setDate] = React.useState<ITime>(
    val
      ? val
      : {
          minute: 0,
          hour: 0
        }
  )
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate((crt) => {
      const newVal = {
        ...crt,
        [e.target.name]: e.target.value
      }
      if (onChange && typeof onChange === "function") onChange(newVal)
      return newVal
    })
  }

  const { t } = useTranslation(["common"])

  return hasMinute || hasHour ? (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        [`& .MuiFormControl-root`]: {
          width: 100
        }
      }}
    >
      {hasMinute && (
        <TextField
          onChange={handleDateChange}
          name="minute"
          label={t("common:minute")}
          value={date.minute}
          select
        >
          {Array.from(Array(60).keys()).map((item) => (
            <MenuItem value={item > 9 ? item : `0${item}`} key={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
      {hasHour && (
        <TextField
          onChange={handleDateChange}
          value={date.hour}
          name="hour"
          label={t("common:hour")}
          select
        >
          {Array.from(Array(25).keys()).map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Stack>
  ) : null
}

export default MyTimePicker
