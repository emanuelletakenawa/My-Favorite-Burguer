import { ToastContainer } from "react-toastify";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <GlobalStyles />
    <Router />
    <ToastContainer position="bottom-left" />
  </>
);

export default App;
