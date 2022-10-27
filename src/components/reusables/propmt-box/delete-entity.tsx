import * as React from "react";

import { Button, Stack, Typography } from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { api } from "@/api";
import { toaster } from "@/components/reusables/toaster";
import { useTranslation } from "react-i18next";

interface IDeleteEntityBoxProps {
  title: string;
  endpoint: string;
  onDelete: () => void;
  onClose: () => void;
  cancelButtonText?: string;
  acceptButtonText?: string;
}

const DeleteEntityBox: React.FunctionComponent<IDeleteEntityBoxProps> = ({
  title,
  onClose,
  cancelButtonText,
  acceptButtonText,
  endpoint,
  onDelete,
}) => {
  const { t } = useTranslation(["common"]);

  //Handle delete
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  const handleDeleteAttribute = () => {
    if (endpoint)
      api
        .delete(endpoint)
        .then((res) => {
          setDeleteLoading(false);
          toaster.success(res.data.message);
          onClose();
          onDelete();
        })
        .catch((err) => {
          setDeleteLoading(false);
        });
    setDeleteLoading(true);
  };

  return (
    <Stack direction="column" sx={{ p: 1 }} spacing={3}>
      <Typography component="strong">{title}</Typography>
      <Stack direction="row" spacing={1}>
        <Button onClick={onClose} variant="outlined" color="error">
          {cancelButtonText || t("common:cancel")}
        </Button>
        <LoadingButton
          loading={deleteLoading}
          onClick={() => handleDeleteAttribute()}
          variant="contained"
          sx={{ width: 120, maxWidth: "100%" }}
        >
          {acceptButtonText || t("common:submit")}
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default DeleteEntityBox;
