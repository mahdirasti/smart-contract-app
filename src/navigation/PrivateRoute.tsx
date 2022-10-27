import { Navigate, useLocation } from "react-router-dom";

import React from "react";
import RouteNames from "./routeNames";
import { authSelectors } from "@/redux/selectors";
import { useAppSelector } from "@/redux";

type PrivateRouteProps = {
  element: React.ReactNode;
  permission?: string;
};

/**
 * @param {React.ReactNode} element the component to be privated
 * @example `<Route path="path" element={<PrivateRoute element={<HomePage />} />} />`
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, permission }) => {
  const { login } = RouteNames;

  // Get the location of current page and redirect to it after login
  const location = useLocation();

  const isAuthenticated = useAppSelector(authSelectors.isAuthSelector);
  const userPermissions = useAppSelector(authSelectors.userPermissionsSelector);

  if (permission) {
    if (userPermissions.includes(permission)) {
      alert("You have access");
    } else {
      alert("You dont have access");
    }
  }

  /**
   * This function will return Route element based on user Authorization.
   * @returns Element our redirect to login page
   */

  return !isAuthenticated ? (
    <>{element}</>
  ) : (
    <Navigate to={{ pathname: login }} state={{ from: location }} />
  );
};

export default PrivateRoute;
