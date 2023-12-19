import RouteController from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from "./services/api";

function App() {
  
  return (
    <>
      <RouteController/>
      <ToastContainer/>
    </>
  );
}

export default App;