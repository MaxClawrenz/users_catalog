import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("catalog_root"));

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
