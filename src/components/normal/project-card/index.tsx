import { ASSETS_PATH } from "@/consistants";
import { routeNames } from "@/navigation";
import { Box, Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IProjectCardProps {}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = (props) => {
  const { t } = useTranslation(["common", "sections"]);

  return (
    <Stack
      direction={["column", , "row"]}
      justifyContent="space-between"
      alignItems={["start", , "center"]}
      p={2}
      borderRadius={2}
      bgcolor={(t) => t.palette.secondary.dark}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="center"
        spacing={2}
        mb={[2, , "initial"]}
      >
        <Box
          sx={{
            width: "auto",
            display: "flex",
            heigth: "auto",
            ["& img"]: {
              width: 48,
              height: 48,
              objectFit: "cover",
            },
          }}
        >
          <img src={`${ASSETS_PATH}/projects/simon-lee.png`} />
        </Box>
        <Stack>
          <Typography
            gutterBottom
            variant="subtitleRegular"
            color="text.secondary"
          >
            {t("common:instagram")}
          </Typography>
          <Typography
            variant="smallRegular"
            textOverflow={"ellipsis"}
            color="extended_colors.card_text.main"
          >
            {t("sections:contract_card")}
          </Typography>
        </Stack>
      </Stack>
      <Link to={`/${routeNames.startProject.index}/contract-detail/2`}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "8px",
            width: ["100%", , 130],
            height: 36,
            ml: 1,
            fontSize: "12px",
            textTransform: "capitalize",
          }}
        >
          {t("common:read_more")}
        </Button>
      </Link>
    </Stack>
  );
};
export default ProjectCard;
