import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import AdminRoute from "./template/admin/AdminRoute";
import RouteCustomer from "./template/customer/RouteCustomer";
import Login from "./component/login/login";
import Register from "./component/register/register";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import Test from "./component/test/Test";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<RouteCustomer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<AdminRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
