import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { CreditCardProvider } from "./context/CreditCardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CreditCardProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CreditCardProvider>
  </Provider>
);
