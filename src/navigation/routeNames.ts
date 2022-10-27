/**
 * Place all route names here
 * @example ```js
 * {
 *     "assets": "/assets",
 *     "assetDetails": "/assets/:id"
 * }
 * ```
 */

const routes = {
  login: "/login",
  activities: {
    index: "my-activity",
    contract: "contract/:id",
  },
  startProject: {
    index: "start-project",
    detail: {
      index: "contract-detail/:id",
      add: {
        index: "add-detail",
        overview: "overview",
      },
    },
  },
  claims: {
    index: "claims",
    details: "details/:id",
  },
  wallet: {
    index: "wallet",
  },
};

export default routes;
