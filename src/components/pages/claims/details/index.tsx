import CopyIcon from "@/components/icons/copy-icon";
import GridIcon from "@/components/icons/grid-icon";
import LinkIcon from "@/components/icons/link-icon";
import TitleValueViewer from "@/components/reusables/title-value-viewer";
import { ASSETS_PATH } from "@/consistants";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IClaimDetailsProps {}

const ClaimDetails: React.FunctionComponent<IClaimDetailsProps> = (props) => {
  const { t } = useTranslation(["common", "sections"]);
  return (
    <Paper>
      <Stack spacing={1} p={2}>
        <Typography variant={"headingMedium"}>
          {t("common:nickname")}
        </Typography>
        <Typography variant="bodyMedium" sx={{ lineHeight: "20px !important" }}>
          {t("sections:lorem_ipsum")}
        </Typography>
        <Stack
          width={460}
          maxWidth={"100%"}
          spacing={2}
          sx={{
            my: "30px !important",
            "& > div": {
              bgcolor: (t) => t.palette.heading.main,
              borderRadius: 2,
              p: 2,
              justifyContent: "space-between",
              color: (t) => t.palette.common.white,
            },
            "& >:last-child": {
              py: 1,
            },
          }}
        >
          <TitleValueViewer
            title={t("common:unique_code")}
            value={<Typography>4556#7879</Typography>}
          />
          <TitleValueViewer
            title={t("common:unit")}
            icon={<GridIcon />}
            value={
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <Typography>8 unit</Typography>
                <Typography color={"text.secondary"}>from 10</Typography>
              </Stack>
            }
          />
          <TitleValueViewer
            icon={<LinkIcon />}
            title={t("common:link")}
            value={
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography>www.instagram/story/nianaaa</Typography>
                <IconButton>
                  <CopyIcon />
                </IconButton>
              </Stack>
            }
          />
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <LinkIcon />
            <Typography textTransform="capitalize">
              {t("common:attachment")}
            </Typography>
          </Stack>
          <Stack direction="row" flexWrap="wrap">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Box
                  key={item}
                  sx={{
                    mt: 1,
                    mr: 1,
                    width: 90,
                    maxWidth: "100%",
                    height: 90,
                    "& img": {
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                    },
                  }}
                >
                  <img src={`${ASSETS_PATH}/images/LightGrayBox.jpg`} />
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ClaimDetails;
