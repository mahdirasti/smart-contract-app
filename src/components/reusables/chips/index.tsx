import * as React from "react"

import { Chip, Stack, SxProps, Theme } from "@mui/material"

export interface IChip {
  title: string
  value: string
}

interface IChipsHolderProps {
  chips?: IChip[]
  removeChip?: (val: IChip) => void
  sx?: SxProps<Theme>
}

const ChipsHolder: React.FC<IChipsHolderProps> = ({
  chips = [],
  removeChip,
  sx
}) => {
  return (
    <>
      {chips.length ? (
        <Stack
          direction="row"
          justifyContent="flex-start"
          flexWrap={"wrap"}
          sx={{ mt: 1, ...sx }}
        >
          {chips.map((item) => (
            <Chip
              sx={{ mt: "12px !important", mr: "8px !important" }}
              key={item.value}
              label={item.title}
              onDelete={() => {
                if (removeChip && typeof removeChip === "function")
                  removeChip(item)
              }}
            />
          ))}
        </Stack>
      ) : null}
    </>
  )
}

export default ChipsHolder
