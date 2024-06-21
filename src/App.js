import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/HomePage";
import UserPanel from "./components/UserPanel";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="settings" element={<UserPanel />} />
          <Route path="login" element={<LoginPage />} />
          {/* Must be always last route */}
          <Route path="*" element={<>404 page not found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
