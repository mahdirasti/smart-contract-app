import * as actionTypes from "./actions";

import { Reducer } from "redux";
import { UserProfileType } from "../types";

type StateType = {
  isLoading: boolean;
  isAuthenticated: boolean;
  authToken: string | null;
  user?: UserProfileType;
  permissions?: string[];
};

const initial: StateType = {
  isLoading: true,
  isAuthenticated: false,
  authToken: null,
};

const reducer: Reducer<StateType> = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGOUT:
      return initial;
    case actionTypes.AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      const { roles } = action.payload.user as UserProfileType;
      let solidPermissions: string[] = [];
      if (roles && roles.length) {
        for (let role of roles) {
          for (let permission of role.permissions) {
            solidPermissions.push(permission.name);
          }
        }
      }

      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        authToken:
          action.payload.token === true
            ? state.authToken
            : action.payload.token,
        user: action.payload.user,
        permissions: solidPermissions,
      };
    case actionTypes.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
