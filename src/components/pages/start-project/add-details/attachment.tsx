import GalleryAddIcon from "@/components/icons/gallery-add";
import LinkIcon from "@/components/icons/link-icon";
import { routeNames } from "@/navigation";
import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface IContractAttachmentsProps {
  pathId: number;
}

const ContractAttachments: React.FunctionComponent<
  IContractAttachmentsProps
> = ({ pathId }) => {
  const theme = useTheme();
  const { t } = useTranslation(["sections", "common"]);
  const navigate = useNavigate();
  return (
    <Paper sx={{ p: 4, height: "100%" }}>
      <Stack height={"100%"} justifyContent="space-between">
        <Stack spacing={2}>
          <Stack direction={"row"} spacing={1} alignItems="flex-end">
            <LinkIcon />
            <Typography color="text.secondary">
              {t("common:attachment")}
            </Typography>
          </Stack>
          <Typography variant="smallMedium" color={"text.disabled"}>
            {t("sections:attachment_description")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 110,
              height: 110,
              bgcolor: (t) => t.palette.extended_colors.status.main,
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            <GalleryAddIcon />
          </Box>
        </Stack>
        <Stack
          width={["100%", , 300]}
          maxWidth={"100%"}
          height={"auto"}
          mx={"auto"}
        >
          <Button
            onClick={() =>
              navigate(
                `/${routeNames.startProject.index}/contract-detail/${pathId}/${routeNames.startProject.detail.add.index}/${routeNames.startProject.detail.add.overview}`
              )
            }
            variant="contained"
          >
            {t("common:apply")}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ContractAttachments;
