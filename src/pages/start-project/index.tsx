import * as React from "react";
import { Grid, useTheme } from "@mui/material";
import PageWrapperWithNavigators from "@/containers/page-wrapper-breadcrumb";
import { authSelectors } from "@/redux/auth";
import { useAppSelector } from "@/redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/normal/project-card";
import { sidebarItemsCreatorHolder } from "@/hooks";

interface IStartProjectPageProps {}

const StartProjectPage: React.FunctionComponent<IStartProjectPageProps> = (
  props
) => {
  const { t } = useTranslation(["common", "routes"]);

  const location = useLocation();
  const theme = useTheme();
  const userPermissions = useAppSelector(authSelectors.userPermissionsSelector);

  return (
    <PageWrapperWithNavigators
      title={""}
      sidebarItems={sidebarItemsCreatorHolder(
        t,
        location.pathname,
        userPermissions,
        theme
      )}
    >
      {
        <Grid container spacing={2}>
          {[...Array(20)].map((item, index) => (
            <Grid item xs={12} sm={6}>
              <ProjectCard key={index} />
            </Grid>
          ))}
        </Grid>
      }
    </PageWrapperWithNavigators>
  );
};

export default StartProjectPage;
