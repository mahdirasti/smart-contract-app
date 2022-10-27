import "./App.css";
import "./i18n/i18n";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/extends/extendedPrototypes";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { persistor, store } from "./redux";

import GContext from "./contexts/g-context";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { RouterConfig } from "./navigation";
import { ToastContainer } from "./components/reusables/toaster";
import { createMyTheme } from "./mui";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={createMyTheme()}>
            <CssBaseline />
            <ToastContainer />
            <GContext>
              <RouterConfig />
            </GContext>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
