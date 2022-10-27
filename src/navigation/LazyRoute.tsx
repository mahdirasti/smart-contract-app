import React from "react";
import { authSelectors } from "@/redux/auth";
import { routeNames } from ".";
import { toaster } from "@/components/reusables/toaster";
import { useAppSelector } from "@/redux";
import { useNavigate } from "react-router-dom";

type Props = {
  element: React.ReactNode;
  permission?: string;
};

/**
 * @param {React.ReactNode} element the component to be lazy loaded
 * @example `<Route path="path" element={<LazyRoute element={<HomePage />} />} />`
 */

const LazyRoute: React.FC<Props> = ({ element, permission }) => {
  const userPermissions = useAppSelector(authSelectors.userPermissionsSelector);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (permission) {
      if (!userPermissions.includes(permission)) {
        navigate(routeNames.activities.index);
      }
    }
    return () => {};
  }, [permission]);

  return (
    <React.Suspense
      fallback={<div>loading...</div> /* will add fallback later */}
    >
      {element}
    </React.Suspense>
  );
};

export default LazyRoute;
