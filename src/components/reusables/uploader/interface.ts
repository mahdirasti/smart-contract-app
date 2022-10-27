import { SxProps, Theme } from "@mui/material"

import React from "react"
import { filesInputArg } from "."

export type UploaderType = "video" | "doc" | "image"
export type UploaderStyle = "standard" | "minimal"

export interface UploaderProps {
  id: string
  getFiles: (files: filesInputArg) => void
  removeFiles: () => void
  initialValue?: File | string | null
  accept?: string[]
  type?: UploaderType
  style?: UploaderStyle
  uploadAfterDrop?: boolean
  uploadData?: any
  uploadUrl?: string
  onUpload?: (uploaded_file: string, item?: any) => void
  sx?: SxProps<Theme>
  meta?: React.ReactNode
}

export interface BaseUploaderProps extends UploaderProps {
  progress?: number
}

export interface VideoUploadItemProps {
  file: File
  fileName?: string
  handleClose: () => void
}
