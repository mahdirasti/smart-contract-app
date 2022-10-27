import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { BaseUploaderProps } from "./interface";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FModal } from "../modal";
import ReportIcon from "@mui/icons-material/Report";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { UploadedItem } from "./uploaded-item";
import { api } from "@/api";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

export type filesInputArg = any;

var CancelToken = axios.CancelToken;
var cancel: () => void;

var uploadTimeInterval: NodeJS.Timer;

const BaseUploader: React.FC<BaseUploaderProps> = ({
  id,
  getFiles,
  removeFiles,
  initialValue = "",
  accept = ["video/mp4"],
  type = "video",
  style = "standard",
  uploadAfterDrop = false,
  uploadUrl = "",
  uploadData,
  onUpload,
  sx,
  meta = null,
  progress = 0,
}) => {
  const { t } = useTranslation("common");

  const [errors, setErrors] = useState<string[]>([]);

  const [files, setFiles] = useState<filesInputArg>(
    initialValue ? [initialValue] : null
  );

  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (Boolean(!progress)) {
      setErrors([]);
      setFiles(acceptedFiles);
      //Trigger get files
      getFiles(acceptedFiles);
    }
  }, []);

  const onDropRejected = useCallback((rejectedFiles: any) => {
    if (rejectedFiles.length) {
      for (let rejectFile of rejectedFiles) {
        setErrors([...errors, rejectFile?.errors[0]?.message]);
      }
    }
  }, []);

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept,
    onDropRejected,
  });

  const errorMessageForManualUpload =
    accept.length > 1
      ? t("file_type_must_be_one_of_format", {
          format: accept.join(", "),
        })
      : t("file_type_must_be_format", {
          format: accept[0],
        });

  //Upload Manually
  const handleSetFile = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFiles: File[] = [];

    if (e.target.files !== null) {
      Array.from(e.target.files).forEach((file) => {
        if (accept.includes(file.type)) {
          targetFiles.push(file);
        } else {
          setErrors([errorMessageForManualUpload]);
        }
      });
      setFiles(targetFiles);
      //Trigger get files
      getFiles(targetFiles);
    }
  };

  //Has file
  const hasFile = (files && files.length) || false;

  //Handle remove files
  const handleDoRemoveFiles = () => {
    //Remove from parents
    removeFiles();
    //Remove local state
    setFiles(null);
  };

  //Render icon of uploader
  const RenderBaseUploaderIcon = useCallback(() => {
    const sxIcon = {
      [`&`]: {
        opacity: isDragActive ? 1 : 0.34,
        fontSize: "64px",
        transition: "0.3s all",
        mb: 2,
      },
    };

    switch (type) {
      case "video":
        return (
          <Box
            sx={{
              mb: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CloudUploadIcon sx={sxIcon} />
          </Box>
        );
      case "image":
        return (
          <Box sx={{ mb: 1, display: "flex", justifyContent: "center" }}>
            <CloudUploadIcon sx={sxIcon} />
          </Box>
        );
      case "doc":
      default:
        return <SummarizeOutlinedIcon sx={sxIcon} />;
    }
  }, [isDragActive, type]);

  const RenderPreviewUploadedContent = () => {
    switch (type) {
      case "image":
        let imageUrl: any = "";
        try {
          imageUrl =
            files && typeof (files[0] as File).name === "string"
              ? URL.createObjectURL(files[0])
              : initialValue;
        } catch (e) {}

        return imageUrl ? (
          <Box
            sx={{
              overflow: "hidden",
              backgroundImage: `url(${imageUrl})`,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
        ) : null;
      case "video":
        return uploadedUrl || initialValue ? (
          <Box
            sx={{
              [`& video`]: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
              },
            }}
          >
            <video
              id={`${id}-video-player`}
              autoPlay
              muted
              onPlay={() => {
                const videoPlayer: HTMLElement | HTMLVideoElement | null =
                  document.getElementById(`${id}-video-player`);
                if (videoPlayer) {
                  (videoPlayer as HTMLVideoElement).pause();
                  (videoPlayer as HTMLVideoElement).currentTime = 0;
                }
              }}
            >
              <source
                src={
                  uploadedUrl ||
                  (typeof initialValue === "string" && initialValue) ||
                  ""
                }
                type="video/mp4"
                width="100%"
                height="100%"
              />
            </video>
          </Box>
        ) : null;
      default:
        return null;
    }
  };

  const abortUpload = () => {
    if (cancel && typeof cancel === "function") cancel();
    setUploading(false);
    setUploaded(false);
    setUploadedUrl(null);
    setFiles(null);
  };

  const StandardBaseUploaderInner = (
    <>
      <Box sx={{ textAlign: "center", overflow: "hidden" }}>
        {(hasFile && uploaded) || initialValue ? (
          <RenderPreviewUploadedContent />
        ) : (
          <>
            <RenderBaseUploaderIcon />
            <Stack
              direction="column"
              sx={{
                [`& p`]: {
                  fontSize: 14,
                  fontWeigh: 400,
                  color: (t) => alpha(t.palette.common.black, 0.38),
                },
              }}
            >
              <Typography component="p">
                {t("drag_the_image_and_drop_here")}
              </Typography>
              <Typography component="p">
                {t("click_to_select_the_image")}
              </Typography>
              {meta}
            </Stack>
          </>
        )}
      </Box>
      {Boolean(hasFile && progress) && (
        <Box
          sx={{ width: "80%", display: "flex", alignItems: "center", mt: 2 }}
        >
          <Typography
            component="span"
            variant="bodyLight"
            sx={{ mr: 1 }}
            color="text.secondary"
          >
            {progress}%
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              sx={{ width: "100%" }}
              variant="determinate"
              value={progress}
            />
          </Box>
          <IconButton
            sx={{ ml: 1 }}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              abortUpload();
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      )}
    </>
  );

  const MinimalBaseUploaderInner = (
    <IconButton aria-label="upload picture" component="span">
      <AddRoundedIcon sx={{ fontSize: 64 }} />
    </IconButton>
  );

  const hasError = Boolean(errors.length);

  const handleCloseErrorModal = () => {
    setErrors([]);
  };

  const initialValueFileName = !files
    ? initialValue && typeof initialValue === "string"
      ? initialValue.substring(initialValue.lastIndexOf("/") + 1)
      : ""
    : "";

  return (
    <>
      <Box
        component="label"
        htmlFor={id}
        {...getRootProps()}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          maxWidth: "100%",
          width: "100%",
          height: "100%",
          border: "1px dashed",
          overflow: "hidden",
          borderColor: (t) => "#9E9E9E",
          bgcolor: (t) =>
            isDragActive
              ? alpha(t.palette.common.black, 0.02)
              : alpha(t.palette.common.black, 0.02),
          transition: "0.3s all",
          borderRadius: "8px",
          ...sx,
        }}
      >
        {style === "minimal"
          ? MinimalBaseUploaderInner
          : StandardBaseUploaderInner}
        {hasFile && files && !uploading && (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
            }}
          >
            <UploadedItem
              file={files[0]}
              fileName={files[0].name || initialValueFileName}
              handleClose={handleDoRemoveFiles}
            />
          </Box>
        )}
      </Box>
      <FModal open={hasError} handleClose={handleCloseErrorModal}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: 48,
              height: 48,
              mx: "auto",
              bgcolor: (t) => alpha(t.palette.primary.main, 0.04),
              [`& img`]: { width: "50%", height: "auto" },
            }}
          >
            <ReportIcon />
          </Box>
          <Box sx={{ mt: 2, mb: 3 }}>
            {errors.map((error, key) => (
              <Typography
                key={key}
                component="p"
                sx={{ fontWeight: 500, fontSize: 16, textAlign: "center" }}
              >
                {error}
              </Typography>
            ))}
          </Box>
          <Button
            variant="contained"
            disableElevation={true}
            color="primary"
            sx={{
              borderRadius: "50px",
              width: "100%",
              textTransform: "capitalize",
            }}
            onClick={handleCloseErrorModal}
          >
            Got it
          </Button>
        </Box>
      </FModal>
      <input
        id={id}
        type="file"
        style={{ display: "none" }}
        onChange={handleSetFile}
      />
    </>
  );
};

export default BaseUploader;
