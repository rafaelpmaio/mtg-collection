import "./styles/style.css";
import AppRoutes from "components/AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <BrowserRouter>
        <ToastContainer closeOnClick={true} />
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App;
