// import { RouteToPage } from "./RouteToPage";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Main from "./pages/main/Main";
import Sidebar from "./pages/sidebar/Sidebar";

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Main />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
