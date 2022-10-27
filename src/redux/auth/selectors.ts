import { StateType } from "@/redux/createStore"
import { createSelector } from "reselect"

export const loadingSelector = createSelector(
  (state: StateType) => state.auth,
  (auth) => auth.isLoading
)

export const isAuthSelector = createSelector(
  (state: StateType) => state.auth,
  (auth) => auth.isAuthenticated
)

export const tokenSelector = createSelector(
  (state: StateType) => state.auth,
  (auth) => auth.authToken
)

export const userSelector = createSelector(
  (state: StateType) => state.auth,
  (auth) => auth.user
)

export const userPermissionsSelector = createSelector(
  (state: StateType) => state.auth.permissions,
  (permissions) => permissions || []
)
