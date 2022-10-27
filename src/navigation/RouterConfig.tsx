import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import React from "react";
import LazyRoute from "./LazyRoute";
import LoadingIndicatorContainer from "@/components/normal/loading-indicator";
import PrivateRoute from "./PrivateRoute";
import RouteNames from "./routeNames";

/**
 * All routes are placed here. If you wish to lazy load a page, refer to the example below
 * @example ```jsw
 * const UserDashboard = React.lazy(() => import("../panels/user/pages/Dashboard/index.tsx"))
 * .
 * .
 * .
 * <Route path="dashboard" element={<LazyRoute element={<UserDashboard />} />} />
 * ```
 * **Important note:**
 * You must export default the page and import that default export with `React.lazy` in order for lazy loading to work.
 */

//Login page
const LoginFields = React.lazy(() => import("@/pages/login-page"));

//activities
const Activities = React.lazy(() => import("@/pages/activities"));
const SingleActivity = React.lazy(() => import("@/pages/activities/show"));

//projects
const StartProject = React.lazy(() => import("@/pages/start-project"));
const ContractDetails = React.lazy(
  () => import("@/pages/start-project/details")
);
const AddContractDetails = React.lazy(
  () => import("@/pages/start-project/add-details")
);
const ContractOverview = React.lazy(
  () => import("@/pages/start-project/overview")
);
//claims
const ClaimsPage = React.lazy(() => import("@/pages/claims"));
const ClaimDetailsPage = React.lazy(() => import("@/pages/claims/details"));
//wallet
const WalletPage = React.lazy(() => import("@/pages/wallet"));

const RouterConfig = () => {
  const { login, activities, startProject, claims, wallet } = RouteNames;

  const isLoadingAuth = false;

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authServices.getUserProfile());
  // }, []);

  return isLoadingAuth ? (
    <LoadingIndicatorContainer fullScreen type="circular" />
  ) : (
    <Routes>
      <Route path={login} element={<LazyRoute element={<LoginFields />} />} />
      <Route path={"/"} element={<LazyRoute element={<Outlet />} />}>
        <Route index element={<Navigate to={activities.index} />} />
        <Route
          element={
            <LazyRoute element={<PrivateRoute element={<Outlet />} />} />
          }
        >
          <Route path={activities.index}>
            <Route index element={<LazyRoute element={<Activities />} />} />
            <Route
              path={activities.contract}
              element={<LazyRoute element={<SingleActivity />} />}
            />
          </Route>
          <Route path={startProject.index}>
            <Route index element={<LazyRoute element={<StartProject />} />} />
            <Route path={startProject.detail.index}>
              <Route
                index
                element={<LazyRoute element={<ContractDetails />} />}
              />
              <Route path={startProject.detail.add.index}>
                <Route
                  index
                  element={<LazyRoute element={<AddContractDetails />} />}
                />
                <Route
                  path={startProject.detail.add.overview}
                  element={<LazyRoute element={<ContractOverview />} />}
                />
              </Route>
            </Route>
          </Route>
          <Route path={claims.index}>
            <Route index element={<LazyRoute element={<ClaimsPage />} />} />
            <Route
              path={claims.details}
              element={<LazyRoute element={<ClaimDetailsPage />} />}
            />
          </Route>
          <Route path={wallet.index}>
            <Route index element={<LazyRoute element={<WalletPage />} />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterConfig;
