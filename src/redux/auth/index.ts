import * as authSelectors from "./selectors"

import authActions from "./actions"
import { persistReducer } from "redux-persist"
import reducer from "./redcuer"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authToken", "user"]
}

const authReducer = persistReducer(persistConfig, reducer)

export { authActions, authReducer, authSelectors }
